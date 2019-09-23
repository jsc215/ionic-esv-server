import axios from 'axios';
import queryString from 'query-string';
import * as config from '../config';
const api_url = config.esvConfig.API_URL;
const api_key = config.esvConfig.API_KEY;

export const search = async (req, res) => {
  const searchType = req.query.searchType;
  console.log(req.query);
  const searchRequest = {
    q: req.query.verse,
    'include-footnotes': req.query.includeFootnotes,
    'include-footnote-body': req.query.includeFootnoteBody,
    'include-verse-numbers': req.query.includeVerseNumbers,
  };
  // const searchRequest = req.query;
  // searchRequest.q = req.query.verse;
  // searchRequest['include-footnotes'] = req.query.includeFootnotes;
  // searchRequest['include-footnote-body'] = req.query.includeFootnoteBody;
  // searchRequest['include-verse-numbers'] = req.query.includeVerseNumbers;

  const searchParams = `${api_url}${searchType}/?` + queryString.stringify(searchRequest);
  try {
    let result = await axios.get(searchParams, { headers: { Authorization: api_key } });
    if (
      (result.data.passages && !result.data.passages.length) ||
      (result.data.results && !result.data.results.length)
    ) {
      res.status(400).send('search returned no results');
      return;
    }
    if (searchType === 'text') {
      res.json(result.data.passages[0].split('\n'));
    } else {
      res.json(result.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
