import React, { Component } from 'react';
import MarkdownPreview from './MarkdownPreview.js';
import MarkdownRendered from './MarkdownRendered.js';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mdText : '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      mdText: event.target.value,
    });
  }

  render() {
    return (
      <div>
          <MarkdownPreview onChange={this.handleChange} value={this.state.mdText}/>
          <MarkdownRendered value={this.state.mdText}/>
      </div>
    );
  }
}

export default App;
