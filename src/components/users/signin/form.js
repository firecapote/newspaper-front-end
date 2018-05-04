import React from 'react';
import { FieldEmail, FieldPassword } from '../../reduxForm/fildsInfoUser';
import includeReduxForm from '../../reduxForm';

const FormSignIn = ({handleSubmit}) => (
        <form onSubmit={handleSubmit}>
            <FieldEmail />
            <FieldPassword />
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
);

export default includeReduxForm('signin', FormSignIn);