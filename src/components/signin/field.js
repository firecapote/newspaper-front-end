import React from 'react';
import { Field, reduxForm } from 'redux-form';

const FieldSignIn = props => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
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
    form: 'signin',
})(FieldSignIn);
