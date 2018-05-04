import { connect } from 'react-redux';
import { fetchSignUp } from '../../../store/action';
import SignUp from './signup';

function mapStateToProps (state) {
    return {
        result: state.todoApp.result
    };
}

function mapDispatchToProps(dispatch) {
    return { fetchSignUp: data => dispatch(fetchSignUp(data)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);