import React from 'react';

export default class Todo extends React.Component {
    state = {
        todo:'',
        warning: null,
    };

    handleInput  = (e) => {
        const inputValue  = e.target.value;
        const warning = inputValue.includes('.js') ? "You have to know about JavaScript":null;

        this.setState({
            todo: inputValue,
            warning:warning,
        })
    }

    render() {

        const {todo,warning} = this.state;

        return (
            <div>
                <p>{todo}</p>
                <p>
                    <textarea name='todo' value={todo} onChange = {this.handleInput}/>
                </p>

                <hr/>

                <h2>{warning || 'Good Choice !'}</h2>
            </div>
        );
    }
}