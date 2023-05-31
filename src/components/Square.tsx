// Square.tsx

import React from 'react';
import { ISquare } from '../interface';


interface SquareProps {
    value: ISquare;
    onClick: () => void;
}
const Square: React.FC<SquareProps> = (props) => {
    return (
        <button
            className="square"
            onClick={props.onClick}>
            {props.value}
        </button>
    );
}

// 上記より記述量を減らしたい場合
// const Square: React.FC<SquareProps> = ({ value, onClick }) => {
//     return (
//       <button 
//            className="square" 
//            onClick={onClick}>
//         {value}
//       </button>
//     );
// };

export default Square;