import React from 'react';
import Menu from './menu';

export default function Contact() {
    const items = [
        { id: 'tweeter', text: 'Follow on Twitter' },
        { id: 'facebook', text: 'Like on Facebook' },
        { id: 'email', text: 'Email me' },
    ];
    return (
        <div className="container">
            <h3>Contact</h3>
            <Menu items={items} className="text-dark" />
        </div>
    );
}
