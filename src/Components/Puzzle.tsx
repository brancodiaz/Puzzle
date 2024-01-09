import { useState } from 'react'
import './Puzzle.css'
import Board from './Board'

export const Puzzle = () => {
    const [board, setBoard] = useState(GetInitialArray());

    function GetInitialArray(): number[] {
        // Your logic to generate the array here
        const randomArray: number[] = [];

        // Example: Filling the array with random numbers between 1 and 9
        for (let i = 0; i < 10; i++) {
            randomArray.push(i);
        }
        console.log(randomArray);
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
    }


    return (
        <div className='game'>
            <Board board={board} shuffleArray={shuffleArray} />
        </div>);
}

export default Puzzle;
