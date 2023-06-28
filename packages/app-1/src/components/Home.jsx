import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <p>HOME</p>
            <p>
                <button>
                    <Link to="/login">Login</Link>
                </button>
            </p>
            <p>
                <button>
                    <Link to="/contact">Contact</Link>
                </button>
            </p>
        </div>
    );
}