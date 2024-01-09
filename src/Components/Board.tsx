import { Piece } from './Piece';
import './Board.css'
import './Piece.css'
interface IboardProps
{
    board: number[],
    shuffleArray: any,
}

export const Board = ( { board, shuffleArray } : IboardProps) => {
    
    return (
        <>
            <input type='button' value="Start!" className="start" onClick={shuffleArray} />
            <div className="container">
                <Piece id={0} order={board[0]} />
                <div></div>
                <div></div>
                { 
                    board.slice(1).map((piece, index) =>
                    (
                        <Piece id={index + 1} order={piece}></Piece>
                    ))}
            </div>
        </>
    );
}

export default Board;