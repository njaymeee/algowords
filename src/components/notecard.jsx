import React from 'react';
import 'tailwindcss/tailwind.css';

function Notecard(props) {    
    return (
        <div className="notecard rounded-lg">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
};

export default Notecard;