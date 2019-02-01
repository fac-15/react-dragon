import React from 'react';
import { render } from 'react-dom';

const CELL_SIZE = 20;

// class Cell extends React.Component {
//     render() {
//         // console.log('in the cell');

//         const { x, y } = this.props;
//         // console.log('in the props', this.props);

//         return (
//             <div
//                 className="Cell"
//                 style={{
//                     left: `${CELL_SIZE * x + 1}px`,
//                     top: `${CELL_SIZE * y + 1}px`,
//                     width: `${CELL_SIZE - 1}px`,
//                     height: `${CELL_SIZE - 1}px`
//                 }}
//             />
//         );
//     }
// }

const Cell = props => {
    const { x, y } = props;
    return (
        <div
            className="Cell"
            style={{
                left: `${CELL_SIZE * x + 1}px`,
                top: `${CELL_SIZE * y + 1}px`,
                width: `${CELL_SIZE - 1}px`,
                height: `${CELL_SIZE - 1}px`
            }}
        />
    );
};

export default Cell;
