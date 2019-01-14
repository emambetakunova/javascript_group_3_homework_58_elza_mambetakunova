import React from 'react';
import './Button.css'

const Button = props => (
    <div className="Button">
        <button
            onClick={() => props.click(props.children)}
            className={['Button', props.type].join(' ')}
        >
            {props.children}
        </button>
    </div>
);

export default Button;