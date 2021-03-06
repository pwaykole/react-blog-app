import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchInPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };
    componentWillMount(){
        this.props.fetchInPost(this.props.params.id);
    }
    onDelete(){
        this.props.deletePost(this.props.params.id)
        .then(() => {
            this.context.router.push('/');
        });
    }
    render() {
        if(!this.props.post)
            {
                return <div>Loading...</div>
            }
        return (
            <div>
              <Link to="/">Back to Home Page</Link>
              <button className="btn btn-danger pull-xs-right" onClick={this.onDelete.bind(this)}>Delete Post</button>
              <h3>{this.props.post.title}</h3>
              <h6>{this.props.post.categories}</h6>
              <p>{this.props.post.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { post: state.posts.post}
}

export default connect(mapStateToProps, { fetchInPost, deletePost })(PostShow);