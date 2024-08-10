import { useState } from "react";
import "./grid.css"
import isWinner from "../helper/checkwinner";
import Card from "../Component/Card/Card";
function Grid({numberOfCard}){
    const [board,setBoard]=useState(Array(numberOfCard).fill(""));
    const [turn,setTrun ]=useState(true);//true=0,false=x
    const [winner,setWinner]=useState(null);
    function play(index){
        if(turn ==true){
            board[index]="0";

        }
        else{
            board[index]="X";
        }
        const win= isWinner(board,turn ? "0":"X");
        if(win){
            setWinner(win);

        }
        setBoard([...board]);
        setTrun(!turn);
    }
    function reset(){
        setTrun(true);
        setWinner(null)
        setBoard(Array(numberOfCard).fill(" "))
    }
    
    
    return(

        <div className="grid-wrapper">
            {
                winner && (
                    <>
                    <h1 className="turn-highlight">Winner is {winner}</h1>
                    <button className="reset" onClick={reset}>Reset Game</button>
                    </>
                )
            }
            <h1 className="turn-highlight">Current turn:{(turn) ? '0':'X'}</h1>
            <div className="grid">
            {board.map((el,idx)=><Card gameEnd={winner ? true: false} key={idx} onPlay={play} player={el} index={idx}/>)}

            </div>
        </div>
    );
}
export default Grid;