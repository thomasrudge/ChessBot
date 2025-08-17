import "./index.css";
import axios from "axios";
import BlackBishop from "../Pieces/black_bishop";
import WhiteBishop from "../Pieces/white_bishop";
import { useState } from "react";
import BlackRook from "../Pieces/black_rook";
import WhiteRook from "../Pieces/white_rook";
import BlackKnight from "../Pieces/black_kinght";
import WhiteKnight from "../Pieces/white_kinght";
import BlackKing from "../Pieces/black_king";
import WhiteKing from "../Pieces/white_king";
import BlackQueen from "../Pieces/black_queen";
import WhiteQueen from "../Pieces/white_queen";
import BlackPawn from "../Pieces/black_pawn";
import WhitePawn from "../Pieces/white_pawn";
export default function Board1(){

    // PAWNS
    const [bp1f, setBp1f] = useState("a"); const [bp1r, setBp1r] = useState(7);
    const [bp2f, setBp2f] = useState("b"); const [bp2r, setBp2r] = useState(7);
    const [bp3f, setBp3f] = useState("c"); const [bp3r, setBp3r] = useState(7);
    const [bp4f, setBp4f] = useState("d"); const [bp4r, setBp4r] = useState(7);
    const [bp5f, setBp5f] = useState("e"); const [bp5r, setBp5r] = useState(7);
    const [bp6f, setBp6f] = useState("f"); const [bp6r, setBp6r] = useState(7);
    const [bp7f, setBp7f] = useState("g"); const [bp7r, setBp7r] = useState(7);
    const [bp8f, setBp8f] = useState("h"); const [bp8r, setBp8r] = useState(7);

    const [wp1f, setWp1f] = useState("a"); const [wp1r, setWp1r] = useState(2);
    const [wp2f, setWp2f] = useState("b"); const [wp2r, setWp2r] = useState(2);
    const [wp3f, setWp3f] = useState("c"); const [wp3r, setWp3r] = useState(2);
    const [wp4f, setWp4f] = useState("d"); const [wp4r, setWp4r] = useState(2);
    const [wp5f, setWp5f] = useState("e"); const [wp5r, setWp5r] = useState(2);
    const [wp6f, setWp6f] = useState("f"); const [wp6r, setWp6r] = useState(2);
    const [wp7f, setWp7f] = useState("g"); const [wp7r, setWp7r] = useState(2);
    const [wp8f, setWp8f] = useState("h"); const [wp8r, setWp8r] = useState(2);

    // KINGS
    const [bkf, setBkf] = useState("e"); const [bkr, setBkr] = useState(8);
    const [wkf, setWkf] = useState("e"); const [wkr, setWkr] = useState(1);

    // QUEENS
    const [bqf, setBqf] = useState("d"); const [bqr, setBqr] = useState(8);
    const [wqf, setWqf] = useState("d"); const [wqr, setWqr] = useState(1);

    // ROOKS
    const [br1f, setBr1f] = useState("a"); const [br1r, setBr1r] = useState(8);
    const [br2f, setBr2f] = useState("h"); const [br2r, setBr2r] = useState(8);

    const [wr1f, setWr1f] = useState("a"); const [wr1r, setWr1r] = useState(1);
    const [wr2f, setWr2f] = useState("h"); const [wr2r, setWr2r] = useState(1);

    // BISHOPS
    const [bb1f , setBb1f] = useState("c"); const [bb1r , setBb1r] = useState(8);
    const [bb2f , setBb2f] = useState("f"); const [bb2r , setBb2r] = useState(8);

    const [wb1f , setWb1f] = useState("c"); const [wb1r , setWb1r] = useState(1);
    const [wb2f , setWb2f] = useState("f"); const [wb2r , setWb2r] = useState(1);

    // KNIGHTS
    const [bn1f, setBn1f] = useState("b"); const [bn1r, setBn1r] = useState(8);
    const [bn2f, setBn2f] = useState("g"); const [bn2r, setBn2r] = useState(8);

    const [wn1f, setWn1f] = useState("b"); const [wn1r, setWn1r] = useState(1);
    const [wn2f, setWn2f] = useState("g"); const [wn2r, setWn2r] = useState(1);


    
    

    return (
        <>
        
        <div className="squares">
            <div className="columns">
                <div className="white">a8</div>
                <div className="green">a7</div>
                <div className="white">a6</div>
                <div className="green">a5</div>
                <div className="white">a4</div>
                <div className="green">a3</div>
                <div className="white">a2</div>
                <div className="green">a1</div>
            </div>

            <div className="columns">
                <div className="green">b8</div>
                <div className="white">b7</div>
                <div className="green">b6</div>
                <div className="white">b5</div>
                <div className="green">b4</div>
                <div className="white">b3</div>
                <div className="green">b2</div>
                <div className="white">b1</div>
            </div>
            <div className="columns">
                <div className="white">c8</div>
                <div className="green">c7</div>
                <div className="white">c6</div>
                <div className="green">c5</div>
                <div className="white">c4</div>
                <div className="green">c3</div>
                <div className="white">c2</div>
                <div className="green">c1</div>
            </div>

            <div className="columns">
                <div className="green">d8</div>
                <div className="white">d7</div>
                <div className="green">d6</div>
                <div className="white">d5</div>
                <div className="green">d4</div>
                <div className="white">d3</div>
                <div className="green">d2</div>
                <div className="white">d1</div>
            </div>
            <div className="columns">
                <div className="white">e8</div>
                <div className="green">e7</div>
                <div className="white">e6</div>
                <div className="green">e5</div>
                <div className="white">e4</div>
                <div className="green">e3</div>
                <div className="white">e2</div>
                <div className="green">e1</div>
            </div>

            <div className="columns">
                <div className="green">f8</div>
                <div className="white">f7</div>
                <div className="green">f6</div>
                <div className="white">f5</div>
                <div className="green">f4</div>
                <div className="white">f3</div>
                <div className="green">f2</div>
                <div className="white">f1</div>
            </div>
            <div className="columns">
                <div className="white">g8</div>
                <div className="green">g7</div>
                <div className="white">g6</div>
                <div className="green">g5</div>
                <div className="white">g4</div>
                <div className="green">g3</div>
                <div className="white">g2</div>
                <div className="green">g1</div>
            </div>

            <div className="columns">
                <div className="green">h8</div>
                <div className="white">h7</div>
                <div className="green">h6</div>
                <div className="white">h5</div>
                <div className="green">h4</div>
                <div className="white">h3</div>
                <div className="green">h2</div>
                <div className="white">h1</div>
            </div>
        </div>

        <div className="pieces">

            <BlackKing file={bkf} rank={bkr}/>
            <WhiteKing file={wkf} rank={wkr}/>

            <BlackQueen file={bqf} rank={bqr}/>
            <WhiteQueen file={wqf} rank={wqr}/>

            <BlackRook file= {br1f} rank={br1r}/>
            <BlackRook file= {br2f} rank={br2r}/>
            <WhiteRook file= {wr1f} rank={wr1r}/>
            <WhiteRook file= {wr2f} rank={wr2r}/>

            <BlackBishop file= {bb1f} rank={bb1r} />
            <BlackBishop file={bb2f} rank={bb2r} />
            <WhiteBishop file= {wb1f} rank={wb1r}/>
            <WhiteBishop file= {wb2f} rank={wb2r}/>

            <BlackKnight file = {bn1f} rank= {bn1r}/>
            <BlackKnight file = {bn2f} rank= {bn2r}/>
            <WhiteKnight file = {wn1f} rank= {wn1r}/>
            <WhiteKnight file = {wn2f} rank= {wn2r}/>

            <BlackPawn file = {bp1f} rank= {bp1r}/>
            <BlackPawn file = {bp2f} rank= {bp2r}/>
            <BlackPawn file = {bp3f} rank= {bp3r}/>
            <BlackPawn file = {bp4f} rank= {bp4r}/>
            <BlackPawn file = {bp5f} rank= {bp5r}/>
            <BlackPawn file = {bp6f} rank= {bp6r}/>
            <BlackPawn file = {bp7f} rank= {bp7r}/>
            <BlackPawn file = {bp8f} rank= {bp8r}/>

            <WhitePawn file = {wp1f} rank= {wp1r}/>
            <WhitePawn file = {wp2f} rank= {wp2r}/>
            <WhitePawn file = {wp3f} rank= {wp3r}/>
            <WhitePawn file = {wp4f} rank= {wp4r}/>
            <WhitePawn file = {wp5f} rank= {wp5r}/>
            <WhitePawn file = {wp6f} rank= {wp6r}/>
            <WhitePawn file = {wp7f} rank= {wp7r}/>
            <WhitePawn file = {wp8f} rank= {wp8r}/>
            
            
            
            

        </div>
        </>
    )

}