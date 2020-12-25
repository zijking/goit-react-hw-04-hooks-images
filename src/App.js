import React, { Component } from 'react';

import SearchBar from './components/Searchbar';
import ImgGellery from './components/ImageGallery';
import apiService from './components/services/apiPixabay';

import './App.css';

class App extends Component {
  state = {
    modalShow: false,
    sword: '',
  };

  searchImg = new apiService();

  handelSubmit = searchWord => {
    this.setState({ sword: searchWord });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.handelSubmit} />
        <ImgGellery sword={this.state.sword} />
      </div>
    );
  }
}

export default App;
