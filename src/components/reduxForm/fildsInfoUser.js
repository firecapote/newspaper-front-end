import React from 'react';
import { Field } from 'redux-form';

export const FieldName = () => {
    return (
        <div>
            <label htmlFor="name">Name</label>
            <div>
                <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Name"
                />
            </div>
        </div>
    );
};

export const FieldAge = () => {
    return (
        <div>
            <label htmlFor="age">Age</label>
            <div>
                <Field
                    name="age"
                    component="input"
                    type="text"
                    placeholder="Age"
                />
            </div>
        </div>
    );
};

export const FieldEmail = () => {
    return (
        <div>
            <label htmlFor="email">Email</label>
            <div>
                <Field
                    name="email"
                    component="input"
                    type="email"
                    placeholder="Email"
                />
            </div>
        </div>
    );
};

export const FieldPassword = () => {
    return (
        <div>
            <label htmlFor="password">Password</label>
            <div>
                <Field
                    name="password"
                    component="input"
                    type="password"
                    placeholder="Password"
                />
            </div>
        </div>
    );
};