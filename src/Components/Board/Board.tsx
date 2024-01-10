import { Piece } from '../Piece/Piece';
import './Board.css'
import '../Piece/Piece.css'
interface IboardProps
{
    board: number[],
    shuffleArray: any,
    movePiece: any
}

export const Board = ( { board, shuffleArray, movePiece } : IboardProps) => {
    
    return (
        <>
            <input type='button' value="Start!" className="start" onClick={shuffleArray} />
            <div className="container">
                <Piece id={0} order={board[0]} movePiece={movePiece}/>
                <div></div>
                <div></div>
                { 
                    board.slice(1).map((piece, index) =>
                    (
                        <Piece id={index + 1} order={piece} movePiece={movePiece} />
                    ))}
            </div>
        </>
    );
}

export default Board;