import React from 'react';

// Компонент для отображения одной клетки
function Square({ value, onClick, isWinning }) {
    return (
        <button
            className={`square ${isWinning ? 'winning' : ''}`} // Добавляем класс для выигрышной клетки
            onClick={onClick}
        >
            {value}
        </button>
    );
}

export default Square;
