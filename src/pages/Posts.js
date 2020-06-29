import React, { Component } from 'react';
import axios from 'axios';
import "./Posts.css";
import {Link} from "react-router-dom";

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
          let url = "/posts/" + post.id;
          return <article key={post.id} className="post column is-one-third">
              <Link to={url}><h2 className="post__title">{post.title}</h2></Link>
              <p>{post.body}</p>
          </article>
        })

        return ( 
        <div className="posts container">
            <h1 className="title is-1">Mes articles</h1>
            <div className="columns is-multiline">
              {postsList.length > 0 ? postsList: "En chargement..."}
            </div>
        </div> );
    }
}
 
export default Posts;