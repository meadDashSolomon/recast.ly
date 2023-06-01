import VideoPlayer from './VideoPlayer.js'

var VideoListEntry = ({video, vidPlaying, setVidPlaying}) => {
  return (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" onClick={(event) => setVidPlaying(video)}>{video.snippet.title}</div>
      <div className="video-list-entry-detail">{video.snippet.description}</div>
    </div>
  </div>
  )
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;


{/* <div><h5><em>videoListEntry</em> charmander</h5></div>
<div><h5><em>videoListEntry</em> view goes here</h5></div>
<div><h5><em>videoListEntry</em> view goes here</h5></div>
<div><h5><em>videoListEntry</em> view goes here</h5></div>
<div><h5><em>videoListEntry</em> view goes here</h5></div> */}

/*
const VideoListEntry = (video) => {
  return (
    <div><{video}</div>



  )
}


*/