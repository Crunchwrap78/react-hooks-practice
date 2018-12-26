import React, { useState } from 'react';

export default function Register() {
    const initialFormState = {
        username: '',
        email: '',
        password: ''
    };

    const [form, setForm] = useState(initialFormState);

    const [user, setUser] = useState(null);

    const handleChange = event => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        setUser(form);
        setForm(initialFormState);
    }

    const { email, password, username } = form;
    return(
        <div
            style={{
                textAlign: 'center'
            }}
        >
            <h2>Login</h2>
            <form
                style={{
                    display: 'grid',
                    alignItems: 'center',
                    justifyItems: 'center'
                }}
                onSubmit={handleSubmit}
            >
                 <input
                    name="username" 
                    type="text"
                    placeholder="username"
                    onChange={handleChange}
                    value={username}
                />
                <input
                    name="email"  
                    type="text"
                    placeholder="email"
                    onChange={handleChange}
                    value={email}
                />
                <input
                    name="password"  
                    type="text"
                    placeholder="password"
                    onChange={handleChange}
                    value={password}
                />
                <button type="submit">Submit</button>
            </form>
            {user && JSON.stringify(user, null, 2)}
        </div>
    )
}