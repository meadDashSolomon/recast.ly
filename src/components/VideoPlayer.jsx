var VideoPlayer = (video) => {
  console.log('clicked vid passed', video)
  return (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src= {`https://www.youtube.com/embed/${video.video.id.videoId}`} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{video.video.snippet.title}</h3>
      <div>{video.video.snippet.description}</div>
    </div>
  </div>
  )
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
// "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"