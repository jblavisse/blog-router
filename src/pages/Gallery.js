import React, { Component } from 'react';
import axios from 'axios';

class Gallery extends Component {
    state = {
        photos: [],
        title: ""
      }
    
      componentDidMount() {
         let id = this.props.match.params.id;
         axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
         .then(res => {
             this.setState({
                 title: res.data.title
             })
         })

         axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
         .then(res => {
             this.setState({
                 photos: res.data
             })
         })
      }

    render() { 
        let photosList = this.state.photos.map(photo => {
            return <img className="column is-one-quarter" src={photo.url} />
        })

        return ( 
        <div className="gallery">
            <h1 className="title is-1">{this.state.title}</h1>
            <div className="columns is-multiline">
                {photosList}
            </div>
        </div> );
    }
}
 
export default Gallery;