import React from 'react'
import { useStore } from '../../store/store';

function Form() {
const addTodo = useStore(state => state.addTodo);

    const handleAddTodo = (e) => {
        e.preventDefault();
        const newTodo = e.target.todo.value;
        if (newTodo.trim()) {
          addTodo(newTodo);
          e.target.todo.value = '';
        }
      };

  return (
    <>
        <form className='mb-6' onSubmit={handleAddTodo}>
        <input className='w-[300px] h-12 rounded-xl mr-2 pl-5 text-lg outline-none border-2 border-gray-100' type="text" name="todo" placeholder="Add a new todo" />
        <button className='w-[100px] h-12 bg-orange-100 rounded-xl text-lg' type="submit">Add</button>
      </form>
    </>
  )
}

export default Form
