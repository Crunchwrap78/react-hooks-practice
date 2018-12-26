import uuid from 'uuid';

export default function reducer(state, action) {
    switch(action.type) {
        case "GET_TODOS":
            return {
                ...state,
                todos: action.todos
            };
        case "ADD_TODO":
            // if (!action.todo) {
            //     return state;
            // }
            // if (state.todos.findIndex(t =>t.text === action.todo) > -1) {
            //     return state;
            // }
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        case "SET_CURRENT_TODO": 
            return {
                ...state,
                currentTodo: action.todo
            }
        case "TOGGLE_TODO":
            const todos = state.todos.map(t => t.id === action.todo.id ? { ...action.todo, complete: !action.todo.complete } : t)
            return {
                ...state,
                todos
            }
        case "REMOVE_TODO":
            const isTodoRemoved = state.currentTodo.id === action.id ? {} : state.currentTodo;
            return {
                ...state,
                currentTodo: isTodoRemoved,
                todos: state.todos.filter(t => t.id !== action.id)
            }
        case "UPDATE_TODO":
            if (!action.todo) {
                return state;
            }
            if (state.todos.findIndex(t =>t.text === action.todo) > -1) {
                return state;
            }
            const updatedTodos = state.todos.map(todo => {
                return todo.id === action.current.id ? {
                    id: action.current.id,
                    text: action.todo,
                    complete: action.current.complete
                } : todo
            });
            return {
                ...state,
                currentTodo: {},
                todos: updatedTodos
            };
        default:
            return state
    }
}