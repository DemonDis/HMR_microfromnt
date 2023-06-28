import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div>
            <p>CONTACT</p>
            <button>
                <Link to="/">Home</Link>
            </button>
        </div>
    );
}