import React from 'react';
import { FieldName, FieldAge, FieldEmail, FieldPassword } from '../../reduxForm/fildsInfoUser';
import includeReduxForm from '../../reduxForm';

const FormSignUp = ({handleSubmit}) => (
        <form onSubmit={handleSubmit}>
            <FieldName />
            <FieldAge />
            <FieldEmail />
            <FieldPassword />
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );

export default includeReduxForm('signup', FormSignUp);