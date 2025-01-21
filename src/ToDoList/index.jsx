import { useState } from "react";
export const TodoList = () => {
    const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Andare in palestra',
    completed: false
    },
    {
    id: 2,
    text: 'Incontro a scuola',
    completed: false
    }
    ]);
    
    const [text, setText] = useState('');
   function addTask(text) {
    const newTask = {
    id: Date.now(),
    text,
    completed: false
    };
    setTasks([...tasks, newTask]);
    setText('');
    }
   function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
    }
    
   function toggleCompleted(id) {
    setTasks(tasks.map(task => {
    if (task.id === id) {
    return {...task, completed: !task.completed};
    } else {
    return task;
    } 
    }));
    }
   return (
    <div className="todo-list">
    {tasks.map(task => (
    <TodoItem
    key={task.id} 
    task={task}
    deleteTask={deleteTask}
    toggleCompleted={toggleCompleted} 
    />
    ))}
   <input
    value={text}
    onChange={e => setText(e.target.value)} 
    />
   <button onClick={() => addTask(text)}>Aggiungi</button>
   
    </div>
    );
   }

   export const TodoItem = ({ task, deleteTask, toggleCompleted }) => {
    function handleChange() {
     toggleCompleted(task.id);
     }
     
     return (
     <div className="todo-item">
     <input 
     type="checkbox"
     checked={task.completed}
     onChange={handleChange}
     />
    <p>{task.text}</p>
    <button onClick={() => deleteTask(task.id)}>
     X
     </button>
     </div>
     );
    }
    