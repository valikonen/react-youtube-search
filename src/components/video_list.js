import React from 'react';
import VideoListItem from './video_list_item.js';

const VideoList = (props) => {
    const videoItem = props.videos.map( (item) => {
        return <VideoListItem onVideoClick={props.onVideoClick} video={item} key={item.id.videoId} />
    }); 
    
    return(
        <div>
            <ul className="col-md-4 list-group">
                {videoItem}
            </ul>
        </div>
    )
};

export default VideoList;