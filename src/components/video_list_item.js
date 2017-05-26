import React from 'react';


const VideoListItem = ({video, onVideoClick}) => {

    const imageUrl = video.snippet.thumbnails.default.url;

    return(
        <li className="list-item" onClick={ () => onVideoClick(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img src={imageUrl} alt="" className="media-object" />
                </div>
            </div>

            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
            
        </li>
    )
}

export default VideoListItem;