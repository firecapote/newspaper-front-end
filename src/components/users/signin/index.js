import { connect } from 'react-redux';
import { fetchSignIn } from '../../../store/action';
import SignIn from './signin';

function mapStateToProps (state) {
    return {
        todoApp: state.todoApp.result
    };
}

function mapDispatchToProps(dispatch) {
    return { fetchSignIn: data => dispatch(fetchSignIn(data)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);