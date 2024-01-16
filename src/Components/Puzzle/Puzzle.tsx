import { useState } from 'react'
import './Puzzle.css'
import Board from '../Board/Board'

export const Puzzle = () => {
    const [board, setBoard] = useState(GetInitialArray());
    const [movesCounter, setMovesCounter] = useState(0);
    const [startedGame, setStartedGame] = useState(false);
    const [disabledPiece, setDisabledPiece] = useState(0);

    function GetInitialArray(): number[] {
        // Your logic to generate the array here
        const randomArray: number[] = [];
        const limit = 9;
        // Example: Filling the array with random numbers between 1 and 9
        for (let i = 0; i < limit; i++) {
            randomArray.push(i);
        }
        // console.log(randomArray);
        return randomArray;
    }

    function shuffleArray() {
        setStartedGame(true);
        setMovesCounter(0);
        setDisabledPiece(Math.floor(Math.random() * 9));
        // setBoard(prevBoard => {
        //     const array = [...prevBoard]; // Create a copy of the array
        //     array[0] = 0;
        //     array[1] = 1;
        //     array[2] = 2;
        //     array[3] = 3;
        //     array[4] = 4;
        //     array[5] = 5;
        //     array[6] = 6;
        //     array[7] = 8;
        //     array[8] = 7;
        //     return array;
        // });
        setBoard(prevBoard => {
            const array = [...prevBoard];
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        });
    }

    function movePiece(valueToMove: number) {
        const array = [...board];

        const disabledIndex = array.indexOf(disabledPiece);
        const indexToMove = array.indexOf(valueToMove);

        if (disabledIndex === indexToMove) {
            return;
        }

        // console.log('indice a mover: ' + indexToMove);
        // console.log('indice hueco: ' + disabledIndex);

        const diff = disabledIndex - indexToMove;

        if (diff === 3 || diff === -3) {
            ValidateMove(indexToMove, (indexToMove + diff), disabledIndex, array);
        }

        if ((diff === 1 && (indexToMove + 1) % 3 !== 0) || (diff === -1 && (indexToMove) % 3 !== 0)) {
            ValidateMove(indexToMove, (indexToMove + diff), disabledIndex, array);
        }
    }

    function ValidateMove(currentIndex: number, newIndex: number, disabledIndex: number, array: number[]): boolean {
        if (newIndex < 0 || newIndex > 9)
            return false;

        if (newIndex === disabledIndex) {
            const aux = array[disabledIndex];
            array[disabledIndex] = array[currentIndex];
            array[currentIndex] = aux;
            if (ValidateWinning(array)) {
                console.log('Ganaste!');
            }
            setBoard(array);
            setMovesCounter(movesCounter + 1);
            return true;
        }

        return false;
    }

    const ValidateWinning = (array: number[]): boolean => {
        for (let i: number = 0; i < 9; i++) {
            if (array[i] !== i) {
                return false;
            }
            console.log(array[i]);
        }
        return true;
    }


    return (
        <div className='game'>
            <h1>PUZZLE</h1>
            <div className='options'>
                {!startedGame && <input type='button' value="Start!" className="buttonstart" onClick={shuffleArray} />}
                {startedGame && <div className="preview"></div>}
            </div>
            {<Board board={board} movePiece={movePiece} disabledOrder={disabledPiece} startedGame={startedGame} />}
            <p>Moves counter: {movesCounter}</p>
        </div>);
}

export default Puzzle;
