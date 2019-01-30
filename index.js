import React from 'react';
import { render } from 'react-dom';
import './dragon.css';

const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;

const App = () => (
    <div>
        <div>
            <div
                className="board"
                style={{
                    width: WIDTH,
                    height: HEIGHT,
                    backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`
                }}
            >
                <h1>Hello</h1>
            </div>
        </div>
    </div>
);

render(<App />, document.getElementById('root'));
