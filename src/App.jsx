import React from 'react';
import { useStore } from './store/store';

import TodoList from './components/TodoList/todoList';
import Form from './components/Form/form';

function App() {
  const todos = useStore(state => state.todos);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className={todos.length > 0 ? `w-auto h-[500px] p-10 bg-white shadow-xl transition-all duration-500  rounded-2xl overflow-hidden`:`w-auto h-[200px] items-center justify-center transition-all duration-500 p-10 bg-white shadow-xl rounded-2xl overflow-hidden`}>
      <h1 className='text-[40px] mb-6'>Todo App with <span className='font-semibold text-sky-500'>Zustand</span></h1>
      <Form/>
      <TodoList/>
    </div>
    </div>
  );
}

export default App;
