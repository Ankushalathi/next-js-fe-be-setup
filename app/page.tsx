'use client';

import React, { useState } from 'react';

const FormPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');

        try {
            const res = await fetch('/api/form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setMessage('Form submitted successfully!');
                setFormData({ name: '', email: '' });
            } else {
                const data = await res.json();
                setMessage(data.error || 'Failed to submit form.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage('An error occurred.');
        }
    };

    return (
        <div>
            <h1>Submit Your Details</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default FormPage;
