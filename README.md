# Deep Move — A Chess AI Laboratory

A project for building, training, and comparing chess bots using different neural network architectures. The goal is to systematically experiment with CNN variations and understand how architectural choices affect chess playing strength.

## Architecture

The current generation (Layer One) uses a supervised learning approach:

- **Input:** 12×8×8 binary tensor — one plane per piece type and color
- **Model:** CNN with 3 convolutional layers → ReLU → Flatten → Dense layers → 4096 output scores
- **Output:** scores for all 64×64 possible (from, to) square combinations, masked to legal moves
- **Training data:** Lichess Elite Database (2200+ rated players), stored as `.npy` files
- **Loss:** Cross-Entropy | **Optimizer:** Adam | **Batch size:** 512

## Experiments

Layer One runs 21 controlled experiments, changing one variable at a time against a control model:

| Category | Experiments |
|---|---|
| Data size | 50k, 100k, 200k, 560k games |
| Model size | Narrow, Wide, Deep (5 layers), Shallow (1 layer) |
| Optimizer | SGD, AdamW |
| Kernel size | 3×3, 5×5, 8×8 |
| Training order | Openings → Middlegame → Endgame |
| Specialist models | Openings only, Middlegame only, Endgame only, Combined |
| Board history | 1, 2, and 5 previous positions as extra input planes |
| Search | 2-ply and 4-ply minimax with CNN as evaluation function |

## Stack

- **Training:** Python, PyTorch, Google Colab (T4 GPU) / Mac M4 Pro (MPS)
- **Data:** Lichess Elite PGN files, parsed and encoded as NumPy arrays
- **API:** FastAPI serving trained `.pth` models via a `/move` endpoint
- **Frontend:** React (Lovable), chess.js for game logic

## Project Structure

```
ChessBot/
├── api/
│   ├── server.py          # FastAPI server
│   └── architectures.py   # PyTorch model definitions
├── data/
│   ├── raw_data/          # Lichess PGN files
│   └── formatted_data/    # Encoded .npy tensors
├── models/                # Trained .pth files
└── model-creation/
    └── layer_one/         # Training notebooks per experiment
```

