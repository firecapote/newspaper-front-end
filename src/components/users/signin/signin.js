import React from 'react';
import FormSignIn from './form';

export default props => (
    <FormSignIn onSubmit={(values) => props.fetchSignIn(values)} />
);
