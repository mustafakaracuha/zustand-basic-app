import React from 'react';
import { FaTrash } from 'react-icons/fa';

import { useStore } from './store/store';

function App() {
  const todos = useStore(state => state.todos);
  const addTodo = useStore(state => state.addTodo);
  const toggleTodo = useStore(state => state.toggleTodo);
  const deleteTodo = useStore(state => state.deleteTodo);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = e.target.todo.value;
    if (newTodo.trim()) {
      addTodo(newTodo);
      e.target.todo.value = '';
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className={todos.length > 0 ? `w-auto h-[500px] p-10 bg-white shadow-xl transition-all duration-500  rounded-2xl overflow-hidden`:`w-auto h-[200px] items-center justify-center transition-all duration-500 p-10 bg-white shadow-xl rounded-2xl overflow-hidden`}>
      <h1 className='text-[40px] mb-6'>Todo App with <span className='font-semibold text-sky-500'>Zustand</span></h1>
      <form className='mb-6' onSubmit={handleAddTodo}>
        <input className='w-[300px] h-12 rounded-xl mr-2 pl-5 text-lg outline-none border-2 border-gray-100' type="text" name="todo" placeholder="Add a new todo" />
        <button className='w-[100px] h-12 bg-orange-100 rounded-xl text-lg' type="submit">Add</button>
      </form>
      <ul className='w-full h-[300px] overflow-auto scroll-smooth'>
        {todos.reverse().map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            className=' bg-gray-100 cursor-pointer transition-all duration-300 hover:bg-sky-100 mb-3 rounded-xl flex items-center justify-between p-4'
          >
            <div>
            <span
             className='cursor-pointer mb-2'
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
            <span className='text-md ml-2 opacity-30'>
              {todo.completed ? '(Completed)' : ""}
            </span>
            </div>
            <button className='w-auto p-4 text-rose-400 bg-rose-100 rounded-xl text-md font-medium' onClick={() => deleteTodo(todo.id)}><FaTrash /></button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default App;
