import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import TodosContext from '../context';

export default function TodoForm() {
    const [todo, setTodo] = useState("");
    const { state: { currentTodo = {} }, dispatch } = useContext(TodosContext);

    useEffect(() => {
        if (currentTodo.text) {
            setTodo(currentTodo.text);
        } else {
            setTodo("");
        }
    },[currentTodo.id])

    const handleSubmit = async event => {
        event.preventDefault();
        if(currentTodo.text) {
            const response = await axios.patch(
                `https://todos-api-nuquyjkqpx.now.sh/todos/${currentTodo.id}`,
                {
                  text: todo
                }
            );
            dispatch({type: "UPDATE_TODO", current: currentTodo, todo});
        } else {
            const response = await axios.post(
                "https://todos-api-nuquyjkqpx.now.sh/todos",
                {
                    id: uuid(),
                    text: todo,
                    complete: false
                }
            );
            dispatch({ type: "ADD_TODO", todo: response.data});
        }
        setTodo("");
    }

    return (
       <form className="flex justify-center p-5" onSubmit={handleSubmit}>
            <input 
                type="text"
                className="border-black borde-solid border-2"
                onChange={event => setTodo(event.target.value)}
                value={todo}
            />
       </form> 
    )
}