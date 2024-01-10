import { useState } from 'react'
import './Puzzle.css'
import Board from '../Board/Board'

export const Puzzle = () => {
    const [board, setBoard] = useState(GetInitialArray());
    const [playsCounter, setPlaysCounter] = useState(0);

    function GetInitialArray(): number[] {
        // Your logic to generate the array here
        const randomArray: number[] = [];

        // Example: Filling the array with random numbers between 1 and 9
        for (let i = 0; i < 10; i++) {
            randomArray.push(i);
        }
        // console.log(randomArray);
        return randomArray;
    }

    function shuffleArray() {
        setBoard(prevBoard => {
            const array = [...prevBoard]; // Create a copy of the array
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]]; // Swap elements
            }
            // console.log(array);
            return array;
        });
        setPlaysCounter(0);
    }

    function movePiece(valueToMove: number) {
        const array = [...board];

        console.log('valor a mover: ' + valueToMove);
        console.log(array);

        const indexZero = array.indexOf(0);
        const indexToMove = array.indexOf(valueToMove);

        if (indexZero === indexToMove) {
            return;
        }

        console.log(indexZero);
        console.log(indexToMove);

        if (indexToMove % 3 !== 0 || indexToMove === 0) {
            if (ValidateMove(indexToMove, (indexToMove + 1), indexZero, array))
                return;
        }

        if ((indexToMove - 1) % 3 !== 0 || indexToMove === 1) {
            if (ValidateMove(indexToMove, (indexToMove - 1), indexZero, array))
                return;
        }

        if (indexToMove !== 0 && ValidateMove(indexToMove, (indexToMove + 3), indexZero, array))
            return;

        if ((indexToMove - 3) !== 0 && ValidateMove(indexToMove, (indexToMove - 3), indexZero, array))
            return;
    }

    function ValidateMove(currentIndex: number, newIndex: number, indexZero: number, array: number[]): boolean {
        if (newIndex < 0 || newIndex > 9)
            return false;

        if (newIndex === indexZero) {
            console.log(newIndex);
            array[indexZero] = array[currentIndex];
            array[currentIndex] = 0;
            setBoard(array);
            setPlaysCounter(playsCounter + 1);
            return true;
        }

        return false;
    }


    return (
        <div className='game'>
            <h1>PUZZLE</h1>
            <Board board={board} shuffleArray={shuffleArray} movePiece={movePiece} />
            <label>Número de jugadas: {playsCounter}</label>
        </div>);
}

export default Puzzle;
