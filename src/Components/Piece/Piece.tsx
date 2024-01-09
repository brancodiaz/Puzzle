import './Piece.css'
interface IPieceProps {
    id: number,
    order: number,
    movePiece: any
  }

export const Piece = ({id, order, movePiece} : IPieceProps) => {
  return (
    <div id={id.toString()} className='piece' onClick={() => movePiece(order)} >{order}</div>
  )
}
