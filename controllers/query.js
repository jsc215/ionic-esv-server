import axios from 'axios';
import queryString from 'query-string';
import * as config from '../config';
const api_url = config.esvConfig.API_URL;
const api_key = config.esvConfig.API_KEY;

export const search = async (req, res) => {
  const searchType = 'text';
  const d = req.query;

  const searchParams = `${api_url}${searchType}/?` + queryString.stringify(d);
  try {
    let result = await axios.get(searchParams, { headers: { Authorization: api_key } });
    res.send(result.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
