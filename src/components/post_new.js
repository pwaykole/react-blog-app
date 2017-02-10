import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    onSubmit(props){
        this.props.createPost(props)
        .then(() => {
            //blog post has been created navigate user to the index page
            this.context.router.push('/');
        });
    }

    render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create a New Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea cols="10" rows="5" className="form-control" {...content}></textarea>
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
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
        if(!values.categories)
        {
            error.categories = 'Enter a category'
        }
        if(!values.content)
        {
            error.content = 'Enter some content'
        }
        return error;
    }
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title','categories','content'],
    validate
}, null, { createPost })(PostsNew);