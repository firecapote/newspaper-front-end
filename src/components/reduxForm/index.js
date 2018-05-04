import { reduxForm } from 'redux-form';

export default (nameForm, Form) => {
     return reduxForm({
        form: nameForm,
    })(Form);
};