import React, { useContext, useReducer, useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodosContext from './context';
import todosReducer from './reducer';
import TodoForm from './components/TodoForm';

import * as serviceWorker from './serviceWorker';

const useAPI = endpoint => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await axios.get(endpoint);
        setData(response.data);
    }

    return data
}

const App = () => {
    const initialState = useContext(TodosContext);
    const [state, dispatch] = useReducer(todosReducer, initialState);
    const savedTodos = useAPI("https://todos-api-nuquyjkqpx.now.sh/todos");

    useEffect(() => {
        dispatch({
            type: "GET_TODOS",
            todos: savedTodos
        });
    }, [savedTodos])

    return (
        <TodosContext.Provider value={{state, dispatch}}>
            <TodoForm />
            <TodoList />
        </TodosContext.Provider>   
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
