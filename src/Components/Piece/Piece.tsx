import './Piece.css'
interface IPieceProps {
    id: number,
    order: number,
    movePiece: any,
  }

export const Piece = ({id, order, movePiece} : IPieceProps) => {

  return (
    <div id={id.toString()} 
        className={ order !== 0 ? 'enabled': 'disabled'} 
        onClick={() => movePiece(order)} >{order}</div>
  )
}
