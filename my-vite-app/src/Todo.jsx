import { useState } from 'react'
import './Todo.css';

function TodoList(){
    const [todo,setTodo] = useState([])
    const [todoValue,setTodoValue] = useState('')

    const handleValue = (e) => {
        setTodoValue(e.target.value);
    }

    const handleAddTodo = () => {
        if(todoValue.trim !== ''){
            const newTodo = {
                id: todo.length,
                task: todoValue
            };
            setTodo([...todo,newTodo]);
            setTodoValue('')
        }
    }

    const handleRemove = (id) => {
        const newTodo = todo.filter(todo => todo.id !== id);
        setTodo(newTodo);
    };

    return(
        <>
            <div className='todo-container'>
                <h1>Todo App</h1>
                <input type="text"  
                       value={todoValue} 
                       onChange={handleValue} />
                <br/>   
                <button className="add-btn" onClick={handleAddTodo}>Add Todo</button>
                <br/>
                <br/>
        
                <table>
                        <thead>
                            <tr>
                                <th>Tasks</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todo.map((todoItem) => {
                                return <tr key={todoItem.id}>
                                    <td><h3>{todoItem.task}</h3></td>
                                    <td><button className='remove-btn' onClick={() => handleRemove(todoItem.id)}>Remove</button></td>
                                </tr>
                            })}
                        </tbody>
                </table>
            </div>
        </>
    )
}

export default TodoList