import React, { Component } from 'react';
import FieldSignIn from './field';
import { fetchSignIn } from '../../store/action';
import { connect } from 'react-redux';

class FormSignIn extends Component {
    render() {
        return <FieldSignIn onSubmit={(values) => this.props.dispatch(fetchSignIn(values))} />;
    }
}

function mapStateToProps (state) {
    console.log(state);
    return {
        todoApp: state.todoApp.result
    }
}

const ConnectedSignIn = connect(mapStateToProps)(FormSignIn);

export default ConnectedSignIn;