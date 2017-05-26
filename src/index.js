import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';

const API_KEY = "AIzaSyBJbrWWYErdeBgccwyvaIajmdlrB602M5A";


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({
      key: API_KEY,
      term: 'surfboards'
    }, (data) => {
      this.setState({ videos: data });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'))
