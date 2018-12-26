import React, { useContext } from 'react';
import axios from 'axios';
import TodsContext from '../context'


export default function TodoList() {
    const { state, dispatch } = useContext(TodsContext);
    const title = state.todos.length > 0 ? `${state.todos.length} Todos` : 'Nothing To Do!';
    return (
        <div className="container mx-auto max-w-md text-center font-mono">
            <h1>{title}</h1>
            <ul className="list-reset text-white p-0">
                {state.todos.map(todo => (
                    <li key={todo.id} className="flex items-center bg-orange-dark border-black border-dashed border-2 my-2 py-4">
                        <span 
                            className={`flex-1 ml-12 cursor-pointer ${todo.complete && "line-through text-grey-darkest"}`} 
                            onDoubleClick={() => dispatch({ type: "TOGGLE_TODO", todo })}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch({ type: "SET_CURRENT_TODO", todo })}>
                            <img 
                                src="https://icon.now.sh/edit/0050c5" 
                                alt="Edit Icon"
                                className="h-6"
                            />
                        </button>
                        <button 
                            onClick={async () => {
                                await axios.delete(
                                    `https://todos-api-nuquyjkqpx.now.sh/todos/${todo.id}`
                                )
                                dispatch({type: "REMOVE_TODO", id: todo.id})
                            }}
                        >
                            <img 
                                src="https://icon.now.sh/delete/8b0000" 
                                alt="Edit Icon"
                                className="h-6"
                            />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

