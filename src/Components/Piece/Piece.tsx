import './Piece.css'
interface IPieceProps {
    id: number,
    order: number,
    enabled: boolean,
    movePiece: any,
    position : string
  }

export const Piece = ({id, order, enabled, movePiece, position} : IPieceProps) => {

  const childStyle = {
    // width: '150px',
    // height: '150px',
    // backgroundSize: '450px 450px',
    // backgroundImage: 'url("path/to/your/image.jpg")',
    backgroundImage: 'url("https://sodimac.scene7.com/is/image/SodimacPeru/8829136_01?wid=1500&hei=1500&qlt=70")',
    backgroundPosition: position,
    borderRadius: '4px',
    fontSize: 'xx-large',
    // text-align: center,
    // height: auto,
    // font-size: xx-large,
    
    backgroundSize: '448px',
    // backgroundRepeat: 'no-repeat',
    // position: relative,
  };

  const childDisabledStyle = {
    // backgroundRepeat: 'no-repeat',
    // position: relative,
    // border: '1px solid red',
    borderRadius: '4px'
  };

  return (
    <div id={id.toString()} 
        style={enabled ? childStyle : childDisabledStyle} 
        onClick={() => movePiece(order)} ></div>
  )
}
