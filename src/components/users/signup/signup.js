import React from 'react';
import FormSignUp from './form';

const SignUp = ({result, fetchSignUp}) => (
        <div>
            <FormSignUp onSubmit={(values) => fetchSignUp(values)}/>
            <p>{result}</p>
        </div>
);

export default SignUp;