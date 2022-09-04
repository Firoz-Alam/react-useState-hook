import React, { useState } from 'react';

export default function Todo (){

    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');
    

   const handleInput  = (e) => {
        const inputValue  = e.target.value;
        const warning = inputValue.includes('.js') ? "You have to know about JavaScript":null;

        setTodo(inputValue);
        setWarning(warning);
    }

    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea name='todo' value={todo} onChange = {handleInput}/>
            </p>

            <hr/>

            <h2>{warning || 'Good Choice !'}</h2>
        </div>
    );
}