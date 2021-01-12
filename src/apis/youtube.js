import axios from 'axios';
//npm install axios@0.20.0

const KEY = 'AIzaSyBeZfzYP6QVY1XYVhTE5eUOEzbvTL0c27s';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 7,
    key: KEY,
  },
});
