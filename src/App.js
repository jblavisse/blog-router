import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

import Galleries from "./pages/Galleries";
import Gallery  from "./pages/Gallery";

// Components
import Navbar from "./components/Navbar";


// Remplacer mes services par une galerie
// Page /galeries -> afficher tous les albums
// Page /galeries/{id} -> affiche les images
// d'un album en particulier

class App extends Component {
  state = {
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
        </div>
  
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/posts" component={Posts} />
          <Route path="/posts/:id" component={Post} />
          
          <Route path="/contact" component={Contact} />

          <Route exact path="/galeries" component={Galleries} />
          <Route path="/galeries/:id" component={Gallery} />
      </Switch>
      </Router>
    );
  }
}

export default App;
