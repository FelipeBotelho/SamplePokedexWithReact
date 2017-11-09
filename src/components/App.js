import React, { Component } from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
      All: {}
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
  }

  getPokemons(id) {
      fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10000`)
        .then(res => res.json())
        .then(data => {
          const All = data;
          this.setState({ All });
        })
        .catch(err => console.log(err));
    }

  render() {
    return (
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick} all={this.state.All} />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;