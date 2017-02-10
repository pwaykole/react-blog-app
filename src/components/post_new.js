import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
    render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create a New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea cols="10" rows="5" className="form-control" {...content}></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        );
    }
}

function validate(values)
    {
        const error = {};
        if(!values.title)
        {
            error.title = 'Enter a title'
        }
        return error;
    }
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title','categories','content'],
    validate
}, null, { createPost })(PostsNew);