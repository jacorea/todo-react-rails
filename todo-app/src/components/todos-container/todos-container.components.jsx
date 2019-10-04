import React from 'react';
import axios from 'axios';
import update from 'immutability-helper';

//scss files
import './todos-container.styles.scss'

class TodosContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            inputValue: ''
        }
    }

    getTodos() {
        axios.get('/api/v1/todos')
        .then(response => {
            this.setState({todos: response.data })
        })
        .catch(error => console.log(error))
    }

    createTodo = (e)=> {
        if (e.key === 'Enter') {
            axios.post('/api/v1/todos', {todo: {title: e.target.value}})
            .then(response => {
                const todos = update(this.state.todos, {
                    $splice: [[0,0,response.data]]
                })
                this.setState({todos: todos, inputValue: ''})
            })
            .catch(error => console.log(error))
        }
    }

    handleChange = (e) => {
        this.setState({inputValue: e.target.value })
    }

    componentDidMount() {
        this.getTodos();
    }

    render() {
        return (
            <div>
                <div className="input-container">
                    <input className="task-input" type="text" placeholder="Add a task"
                        maxLength="50" 
                        onKeyPress={this.createTodo}
                        onChange={this.handleChange}
                        value={this.state.inputValue} 
                    />
                </div>
                <div className="listWrapper">
                    <ul className="taskList">
                        {this.state.todos.map((todo)=> {
                            return (
                                <li className="task" todo={todo} key={todo.id} >
                                    <input type="checkbox" className="taskCheckbox"/>
                                    <label className="taskLabel">{todo.title}</label>
                                    <span className="deleteTaskBtn">X</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TodosContainer;
