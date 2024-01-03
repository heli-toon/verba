import axios from 'axios';

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
  
export default function fetchWordDefinition(word) {
  const url = `${API_URL}${word}`;
  return axios.get(url);
}