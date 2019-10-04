import React from 'react';
import './todos-container.styles.scss'

class TodosContainer extends React.Component {
    render() {
        return (
            <div>
                <div className="input-container">
                    <input className="task-input" type="text" placeholder="Add a task" maxLength="50" />
                </div>
                <div className="listWrapper">
                    <ul className="taskList"></ul>
                </div>
            </div>
        )
    }
}

export default TodosContainer;
