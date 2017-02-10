import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-router';

class Posts extends Component {
    componentWillMount(){
        this.props.fetchPost();
    }
    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
            </div>
        );
    }
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({fetchPost}, dispatch);
// }

export default connect(null, { fetchPost })(Posts);