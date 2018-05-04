import { connect } from 'react-redux';
import PostsAll from './postsAll';
import { fetchAllPosts } from '../../store/action';

function mapStateToProps(state) {
    return {
        token: state.todoApp.token,
        allPosts: state.todoApp.allPosts
    }
}

function mapDispatchToProps(dispatch) {
    return { fetchAllPosts: data => dispatch(fetchAllPosts(data)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsAll);