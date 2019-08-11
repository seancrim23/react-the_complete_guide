import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));

class Blog extends Component {
    state = {
        auth: true
    };

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            activeClassName="my-active"
                            to="/posts"
                            exact>Home</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <Posts />} />
                <Route path="/new-post" exact render={() => <div></div>} />*/}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not Found!</h1>} />
                    {/*<Redirect from="/" to="/posts" />*/}
                </Switch>

            </div>
        );
    }
}

export default Blog;