import React from 'react'
import { useStore } from '../../store/store';

import { FaTrash } from 'react-icons/fa';

function TodoList() {
  const todos = useStore(state => state.todos);
  const toggleTodo = useStore(state => state.toggleTodo);
  const deleteTodo = useStore(state => state.deleteTodo);

  return (
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
  )
}

export default TodoList
