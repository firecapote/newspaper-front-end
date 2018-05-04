import React, { Component } from 'react';

class PostsAll extends Component {
    componentWillMount(){
        const token = this.props.token;

        if(token){
            this.props.fetchAllPosts(token);
        }
    }

    render() {
        const { token, allPosts } = this.props;
        let posts;

        if (!token){
            posts = 'You need Sign in';
        }else {
            posts = allPosts.map((item,index) => {
                return (
                    <div key={index}>
                        <p>{item.id_post}</p>
                        <p>{item.title}</p>
                        <p>{item.content}</p>
                        <p>{item.id_user}</p>
                        <p>{item.alltags}</p>
                    </div>
                )
            });
        }
        return (
            <div>
                {posts}
            </div>
        );
    }
}

export default PostsAll;