import React, { Component } from 'react';
import FieldSignUp from './field';
import { fetchSignUp } from '../../store/action';
import { connect } from 'react-redux';

class FormSignUp extends Component {
    render() {
        const resultCreate = this.props.todoApp;
        return (
            <div>
                <FieldSignUp onSubmit={(values) => this.props.dispatch(fetchSignUp(values))} />
                <p>{resultCreate}</p>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        todoApp: state.todoApp.result
    }
}

const ConnectedSignUp = connect(mapStateToProps)(FormSignUp);

export default ConnectedSignUp;