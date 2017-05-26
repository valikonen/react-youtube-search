import React from 'react';

const VideoDetail = ({video}) => {

    if(!video){
        return (<div>Loading...</div>)
    }

    const videoId = video.id.videoId;
    const url = `https://youtube.com/embed/${videoId}`;

    return(
        <div className="videodetail col-md-8">
            <div className="embed-responsive">  
                <iframe width="560" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>       
    )
    
}

export default VideoDetail;