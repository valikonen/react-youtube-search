import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js';
import VideoList from  './components/video_list.js';
import VideoDetail from'./components/video_detail.js';

const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({
      key: API_KEY,
      term: 'surfboards'
    }, (data) => {
      this.setState({ 
        videos: data,
        selectedVideo: data[0] 
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoClick={ selectedVideo => this.setState({selectedVideo}) } videos={this.state.videos} />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'))
