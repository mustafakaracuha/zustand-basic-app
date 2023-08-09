import create from "zustand";

export const useStore = create((set) => {
  const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];

  return {
    todos: storedTodos,
    addTodo: (text) => {
      const newTodo = { text, id: Date.now(), completed: false };
      set((state) => {
        const updatedTodos = [newTodo, ...state.todos];
        localStorage.setItem('todos', JSON.stringify(updatedTodos)); 
        return { todos: updatedTodos };
      });
    },
    editTodo: (id, newText) => {
      set((state) => {
        const updatedTodos = state.todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo
        );
        localStorage.setItem('todos', JSON.stringify(updatedTodos)); 
        return { todos: updatedTodos };
      });
    },
    toggleTodo: (id) => {
      set((state) => {
        const updatedTodos = state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        localStorage.setItem('todos', JSON.stringify(updatedTodos)); 
        return { todos: updatedTodos };
      });
    },
    removeTodo: (id) => {
      set((state) => {
        const updatedTodos = state.todos.filter((todo) => todo.id !== id);
        localStorage.setItem('todos', JSON.stringify(updatedTodos)); 
        return { todos: updatedTodos };
      });
    },
  };
});
