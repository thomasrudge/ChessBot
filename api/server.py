from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
import torch
import chess
from api.architectures import Layer_One_control, Layer_One_narrow, Layer_One_wide, Layer_One_deep, Layer_One_shallow

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class MoveRequest(BaseModel):
    fen: str
    botId: str
    moveNumber: int
    history: list[str]

models = {}
models["layer-one-control"] = Layer_One_control()
models["layer-one-control"].load_state_dict(torch.load("models/layer-one-control.pth", map_location="cpu"))
models["layer-one-control"].eval()

models["layer-one-200k"] = Layer_One_control()
models["layer-one-200k"].load_state_dict(torch.load("models/layer-one-200k.pth", map_location="cpu"))
models["layer-one-200k"].eval()

models["layer-one-50k"] = Layer_One_control()
models["layer-one-50k"].load_state_dict(torch.load("models/layer-one-50k.pth", map_location="cpu"))
models["layer-one-50k"].eval()

models["layer-one-560k"] = Layer_One_control()
models["layer-one-560k"].load_state_dict(torch.load("models/layer-one-560k.pth", map_location="cpu"))
models["layer-one-560k"].eval()

models["layer-one-wide"] = Layer_One_wide()
models["layer-one-wide"].load_state_dict(torch.load("models/layer-one-wide.pth", map_location="cpu"))
models["layer-one-wide"].eval()

models["layer-one-narrow"] = Layer_One_narrow()
models["layer-one-narrow"].load_state_dict(torch.load("models/layer-one-narrow.pth", map_location="cpu"))
models["layer-one-narrow"].eval()

models["layer-one-deep"] = Layer_One_deep()
models["layer-one-deep"].load_state_dict(torch.load("models/layer-one-deep.pth", map_location="cpu"))
models["layer-one-deep"].eval()

models["layer-one-shallow"] = Layer_One_shallow()
models["layer-one-shallow"].load_state_dict(torch.load("models/layer-one-shallow.pth", map_location="cpu"))
models["layer-one-shallow"].eval()

models["layer-one-adamw"] = Layer_One_control()
models["layer-one-adamw"].load_state_dict(torch.load("models/layer-one-adamw.pth", map_location="cpu"))
models["layer-one-adamw"].eval()

models["layer-one-sgd"] = Layer_One_control()
models["layer-one-sgd"].load_state_dict(torch.load("models/layer-one-sgd.pth", map_location="cpu"))
models["layer-one-sgd"].eval()

@app.post("/move")
def get_move(request: MoveRequest):
    # your logic here
    print(request)

    model = models[request.botId]    

    board = chess.Board(request.fen)

    move = model_move(board, model)

    print(request.botId)

    return {"move": move}



def prediction_to_move(number):
    from_square = number // 64
    to_square = number % 64

    letters = 'abcdefgh'
    from_letter = letters[from_square % 8]
    from_number = from_square // 8 + 1

    to_letter = letters[to_square % 8]
    to_number = to_square // 8 + 1

    return f'{from_letter}{from_number}{to_letter}{to_number}'

def model_move(board, model):
    # Model's turn to move
    device = 'cpu'
    model.eval()
    with torch.no_grad():
        tensor = board_to_tensor(board)
        inp = torch.tensor(tensor, dtype=torch.float32).unsqueeze(0).to(device)
        output = model(inp)

    # Converting outputs to move format
    sorted_output = torch.argsort(output[0], descending=True)

    for i in sorted_output:
        move = prediction_to_move(i)
        if move[:2] == move[2:]:  # same square, skip
            continue
        # Promotion check
        from_sq = i // 64
        to_sq = i % 64
        piece = board.piece_at(from_sq)
        if piece and piece.piece_type == chess.PAWN and (to_sq // 8 == 7 or to_sq // 8 == 0):
            move += "q"

        move = chess.Move.from_uci(move)

        if move in board.legal_moves:
            board.push(move)
            return move.uci()
        

def board_to_tensor(board):
    """
    Converts a python-chess Board object into a 12x8x8 numpy tensor.

    Each of the 12 planes represents one piece type and color:
        0: White Pawns     6: Black Pawns
        1: White Knights   7: Black Knights
        2: White Bishops   8: Black Bishops
        3: White Rooks     9: Black Rooks
        4: White Queen    10: Black Queen
        5: White King     11: Black King

    Each plane is an 8x8 grid where 1 indicates the piece is on that
    square and 0 indicates it is not.

    Args:
        board: a chess.Board object representing the current position.

    Returns:
        np.ndarray of shape (12, 8, 8) with binary values.
    """
    
    tensor = np.zeros((12, 8, 8), dtype=np.uint8)
    
    for (piece_type, color), plane in PIECE_TO_PLANE.items():
        for square in board.pieces(piece_type, color):
            row = square // 8
            col = square % 8
            tensor[plane][row][col] = 1
    return tensor

PIECE_TO_PLANE = {
    (chess.PAWN, chess.WHITE): 0,
    (chess.KNIGHT, chess.WHITE): 1,
    (chess.BISHOP, chess.WHITE): 2,
    (chess.ROOK, chess.WHITE): 3,
    (chess.QUEEN, chess.WHITE): 4,
    (chess.KING, chess.WHITE): 5,
    (chess.PAWN, chess.BLACK): 6,
    (chess.KNIGHT, chess.BLACK): 7,
    (chess.BISHOP, chess.BLACK): 8,
    (chess.ROOK, chess.BLACK): 9,
    (chess.QUEEN, chess.BLACK): 10,
    (chess.KING, chess.BLACK): 11,
}

