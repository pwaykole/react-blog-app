import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Posts from './components/posts_index';
import PostsNew from './components/post_new';
import PostShow from './components/post_show';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Posts} />
        <Route path="posts/new" component={PostsNew} />
        <Route path="posts/:id" component={PostShow}></Route>
    </Route>
);