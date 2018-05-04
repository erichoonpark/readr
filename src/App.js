import React, { Component } from 'react';
import './App.css';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      files: [],
      labels: []
    }
  }

  //Upon dropping a file into the app
  onDrop(files) {
    const formData = new FormData();
    formData.append('image', files[0]);
    //Post data to the /upload route
    axios.post('/upload', formData).then(response => {
      this.setState({labels:response.data});
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://media1.tenor.com/images/aa12acad78c918bb62fa41cf7af8cf75/tenor.gif?itemid=5087595' className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Readr</h1>
        </header>
        <Dropzone onDrop={this.onDrop.bind(this)} name="image">
              <p>Hurry, drop your image here!</p>
        </Dropzone>
        <aside>
          <h2>What I think this is...</h2>
          <ul>
            {
              this.state.labels.map(f => <ul key={f}>{f}</ul>)
            }
          </ul>
        </aside>
        <style>
          @import url('https://fonts.googleapis.com/css?family=Roboto');
        </style>
      </div>
    );
  }
}

export default App;
