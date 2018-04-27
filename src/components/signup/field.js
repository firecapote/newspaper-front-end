import React from 'react';
import { Field, reduxForm } from 'redux-form';

const FieldSignUp = props => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
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
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'signup',
})(FieldSignUp);