import exampleVideoData from '../data/exampleVideoData.js'
import VideoList from './VideoList.js'
import VideoListEntry from './VideoListEntry.js'
import VideoPlayer from './VideoPlayer.js'
import searchYouTube from '../lib/searchYouTube.js'
import Search from './Search.js'
const {useState, useEffect} = React;

var App = () => {

  // useEffect(searchYouTube, [])
  // state to keep track of all the videos in video list
  const [currentList, setCurrentList] = useState([]);
  // state to keep track of the curr video in the player
  const [vidPlaying, setVidPlaying] = useState({});

  // edge case for searches that yield 0 results

  useEffect(() => {
  //this code will run immediately after initial render
  let query = 'Java';
  let cbFunction = function (data) {
    setVidPlaying(data[1])
    setCurrentList(data);
  };
  searchYouTube(query, cbFunction)
  }, []);

if (currentList.length === 0 || vidPlaying.id === undefined) {
  return (
    <div>Loading, please wait!</div>
  );
}

  return (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search
        searchYouTube = {searchYouTube}
        setCurrentList = {setCurrentList}
        setVidPlaying = {setVidPlaying}
        />
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer
        video = {vidPlaying}
        currentList = {currentList}
        setCurrentList = {setCurrentList}/>
      </div>
      <div className="col-md-5">
        <VideoList
        videos = {currentList}
        vidPlaying = {vidPlaying}
        setVidPlaying = {setVidPlaying}/>
      </div>
    </div>
  </div>
);
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
