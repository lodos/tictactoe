import React from 'react';
import Square from './Square';

// Компонент для отображения игрового поля 3x3
function Board({ squares, onClick, winningLine }) {
    return (
        <div className="board">
            {Array(3).fill(null).map((_, row) => (
                <div key={row} className="board-row">
                    {Array(3).fill(null).map((_, col) => {
                        const index = row * 3 + col;
                        const isWinningSquare = winningLine && winningLine.includes(index);
                        return (
                            <Square
                                key={index}
                                value={squares[index]}
                                onClick={() => onClick(index)}
                                isWinning={isWinningSquare}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

export default Board;
