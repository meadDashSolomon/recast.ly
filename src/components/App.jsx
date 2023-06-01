import exampleVideoData from '../data/exampleVideoData.js'
import VideoList from './VideoList.js'
import VideoListEntry from './VideoListEntry.js'
import VideoPlayer from './VideoPlayer.js'
const {useState} = React;

var App = () => {
  // state to keep track of all the videos in video list
  const [currentList, setCurrentList] = useState(exampleVideoData);
  // state to keep track of the curr video in the player
  const [vidPlaying, setVidPlaying] = useState(exampleVideoData[0]);

  return (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>hello</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer
        video = {exampleVideoData[0]}
        currentList = {currentList}
        setCurrentList = {setCurrentList}/>
      </div>
      <div className="col-md-5">
        <div><h5><em>videoList</em></h5>
        <VideoList
        videos = {exampleVideoData}
        vidPlaying = {vidPlaying}
        setVidPlaying = {setVidPlaying}/>
        </div>
      </div>
    </div>
  </div>
);
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
