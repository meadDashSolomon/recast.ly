const _ = require('lodash');

var Search = ({searchYouTube, setCurrentList, setVidPlaying}) => {

  // const handleClick = searchYouTube(document.getElementById('searchInput').value, (data) => {

    const handleClick = _.debounce(() => {
      const searchInput = document.getElementById('searchInput').value;
      searchYouTube(searchInput, (data) => {
        setCurrentList(data);
      });
    }, 10000);
  //   setCurrentList(data)});
  // const debouncedHandleClick = _.debounce(handleClick, 10000);
  // const handleButtonClick = () => {
  //   debouncedHandleClick();
  // }



  return (
  <div className="search-bar form-inline">
    <input className="form-control" type="text"
    id ="searchInput"
    />
    <button className="btn hidden-sm-down" onClick = { handleButtonClick;}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
  )
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
