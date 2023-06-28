import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div>
            <p>LOGIN</p>
            <button>
                <Link to="/">Login</Link>  
            </button>
        </div>
    );
}