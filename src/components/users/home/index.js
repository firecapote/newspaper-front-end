import { connect } from 'react-redux';
import HomeUsers from './home';

function mapStateToProps (state) {
    return {
        name: state.todoApp.info.name,
        token: state.todoApp.token
    };
}

export default connect(mapStateToProps)(HomeUsers);