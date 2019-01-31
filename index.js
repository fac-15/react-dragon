import React from 'react';
import { render } from 'react-dom';
import './dragon.css';

const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;

class Cell extends React.Component {
    render() {
        console.log('in the cell');

        const { x, y } = this.props;
        console.log('in the props', this.props);

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
    }
}

class Dragon extends React.Component {
    constructor() {
        super();

        // dividing the height and width for the nr of cells
        this.rows = HEIGHT / CELL_SIZE;
        this.cols = WIDTH / CELL_SIZE;
        this.board = this.makeEmptyBoard();
    }
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyPress);
    }

    // initial snake position
    state = {
        cells: [{ x: 7, y: 5 }, { x: 6, y: 5 }, { x: 5, y: 5 }],
        running: false,
        interval: 1000,
        direction: 'right'
    };

    // Create empty board
    makeEmptyBoard() {
        let board = [];
        for (let y = 0; y < this.rows; y++) {
            board[y] = [];
            for (let x = 0; x < this.cols; x++) {
                board[y][x] = false;
            }
        }
        return board;
    }

    // Create cells from this.board
    makeCells() {
        console.log('in the makecells');

        let cells = [];
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                if (this.board[y][x]) {
                    cells.push({ x, y });
                }
            }
        }
        return cells;
    }

    handleKeyPress = event => {
        // console.log(event);
        let direction, right, left, up, down;
        const snakeHead = this.state.cells[0];

        switch (event.keyCode) {
            case 37:
                console.log('you hit left');
                direction != right ? (direction = left) : (direction = right);
                break;
            case 38:
                console.log('you hit up');
                up;
                direction != down ? (direction = up) : (direction = down);
                break;
            case 39:
                console.log('you hit right');
                direction != left ? (direction = right) : (direction = left);
                break;
            case 40:
                console.log('you hit down');
                down;
                direction != up ? (direction = down) : (direction = up);
                break;
        }

        switch (direction) {
            case right:
                {
                    x: snakeHead.x + 1;
                }
                break;
            case left:
                {
                    x: snakeHead.x - 1;
                }
                break;
            case down:
                {
                    y: snakeHead.y + 1;
                }
                break;
            case up:
                {
                    y: snakeHead.y - 1;
                }
                break;
        }

        this.setState({ direction: direction });
    };

    handleClick = event => {
        console.log('in the handleclick');

        setInterval(() => {
            //            const nextCell = getNextCell(this.state.direction, this.state.cells[0])
            const snakeHead = this.state.cells[0];
            // const nextCell = { x: snakeHead.x, y: snakeHead.y + 1 };

            this.setState({
                cells: [nextCell, ...this.state.cells].slice(0, 3)
            });
        }, this.state.interval);
    };

    // clear interval when unmount

    render() {
        const { cells } = this.state;
        return (
            <div>
                <div
                    tabIndex="1"
                    className="Board"
                    style={{
                        width: WIDTH,
                        height: HEIGHT,
                        backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`
                    }}
                >
                    {cells.map(cell => (
                        <Cell
                            x={cell.x}
                            y={cell.y}
                            key={`${cell.x},${cell.y}`}
                        />
                    ))}
                </div>
                <button onClick={this.handleClick}>start</button>
            </div>
        );
    }
}

// render(<Dragon />, document.getElementById('root'));

export { Dragon, Cell };
