import create from "zustand";

export const useStore = create((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({
      todos: [{ id: Date.now(), text, completed: false }, ...state.todos],
    })),

  deleteTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
}));
