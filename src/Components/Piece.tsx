import './Piece.css'
interface IPieceProps {
    id: number;
    order: number;
  }

export const Piece = ({id, order} : IPieceProps) => {
  return (
    <div id={id.toString()} className='piece'>{order}</div>
  )
}
