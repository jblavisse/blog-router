import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Galleries extends Component {
    state = { 
        albums: []
     }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(res => {
            console.log(res.data)
            this.setState({
                albums: res.data
            })
        })
    }

    render() { 
        let albumsList = this.state.albums.map(album => {
            return <article className="column album">
                <Link to={'/galeries/' + album.id} ><h2>{album.title}</h2></Link>
            </article>
        })
        return ( 
        <div className="galleries">
            <h1 className="title is-1">Ma galerie d'albums</h1>
            {albumsList}
        </div> );
    }
}
 
export default Galleries;