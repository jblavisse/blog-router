import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
    state = {
        posts: [] 
     }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          this.setState({
            posts: res.data
          })
        })
    }

    render() { 
        let postsList = this.state.posts
        .map(post => {
          return <article className="post">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
          </article>
        })

        return ( 
        <div className="posts">
            <h1>Mes articles</h1>
            {postsList}
        </div> );
    }
}
 
export default Posts;