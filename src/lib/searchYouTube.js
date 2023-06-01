import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    url: `https://app-hrsei-api.herokuapp.com/api/recastly/videos?q=${query}&youtube_api_key=${YOUTUBE_API_KEY}`,
    type: 'GET',
    // q: JSON.stringify(query),
    // api_key: YOUTUBE_API_KEY,
    contentType: 'application/json',
    success: (items) => {
      callback(items.slice(0, 5))
    },
    error: (errorMsg) => {
      console.error('Recastly: Failed to get data:', errorMsg);
    },
  });
};
export default searchYouTube;
