import { Piece } from '../Piece/Piece';
import './Board.css'
import '../Piece/Piece.css'
interface IboardProps {
    board: number[],
    movePiece: any,
    disabledOrder: number,
    startedGame: boolean
}

export const Board = ({ board, movePiece, disabledOrder, startedGame }: IboardProps) => {

    const getPosition = (index: number): string => {
        const y: number = Math.floor(index / 3);
        const x: number = (index) - (Math.floor(index / 3) * 3);
        const position: string = '-' + (x * 150) + 'px -' + (y * 150) + 'px'
        // console.log(position);
        return position;
    }
    return (
        <>
            <div className={startedGame ? "container" : "initial"}>
                {startedGame &&
                    board.map((piece, index) =>
                    (
                        <Piece id={index + 1} order={piece} enabled={piece !== disabledOrder ? true : false} movePiece={movePiece}
                            position={getPosition(piece)}
                        />
                    ))}
            </div>
        </>
    );
}

export default Board;