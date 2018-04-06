import React, { Component } from 'react';
import './App.css';
import Dropzone from 'react-dropzone';
import ajax from 'superagent';



class App extends Component {
  constructor() {
    super()
    this.state = {
      files: [],
      labels: []
    }
  }

  onDrop(files) {
    this.setState({
      files
    });
    ajax.post('/upload')
        .end((error, response) => {
          if (!error && response) {
            console.log(response);
            this.setState({ labels: response.labels });
          } else {
            console.log('There was an error fetching from Google Vision API', error);
          }
        })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://media1.tenor.com/images/aa12acad78c918bb62fa41cf7af8cf75/tenor.gif?itemid=5087595' className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Readr</h1>
        </header>
        <Dropzone onDrop={this.onDrop.bind(this)}>
              <p>Drop your image here!</p>
        </Dropzone>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </div>
    );
  }
}

export default App;
