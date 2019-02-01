import React from 'react';
import { render } from 'react-dom';
// import './dragon.css';
import { Dragon, Cell } from './index.js';

const App = () => {
    return (
        <div>
            <Dragon />
            <Cell />
        </div>
    );
};

render(<App />, document.getElementById('root'));
