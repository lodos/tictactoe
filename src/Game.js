import React, { useState } from 'react';
import Board from './Board';

// Основной компонент игры
function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    // Обработчик клика по клетке
    const handleClick = (i) => {
        const newSquares = squares.slice();
        if (calculateWinner(newSquares).winner || newSquares[i]) return;
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    const { winner, winningLine } = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Победитель: ' + winner;
    } else {
        status = 'Следующий игрок: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div className="game">
            <div>{status}</div>
            <Board squares={squares} onClick={handleClick} winningLine={winningLine} />
        </div>
    );
}

// Функция для вычисления победителя и линии победы
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { winner: squares[a], winningLine: [a, b, c] };
        }
    }
    return { winner: null, winningLine: null };
}

export default Game;
