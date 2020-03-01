import axios from 'axios';
import queryString from 'query-string';

const api_url = process.env.API_URL;
const api_key = process.env.API_KEY;

export const search = async (req, res) => {
  const searchConfig = {
    searchType: req.query.searchType,
    searchRequest: {
      q: req.query.verse,
      'include-footnotes': req.query.includeFootnotes,
      'include-footnote-body': req.query.includeFootnoteBody,
      'include-verse-numbers': req.query.includeVerseNumbers,
      page: req.query.page
    }
  };
  // const searchType = req.query.searchType;
  // console.log(req.query);
  // const searchRequest = {
  //   q: req.query.verse,
  //   'include-footnotes': req.query.includeFootnotes,
  //   'include-footnote-body': req.query.includeFootnoteBody,
  //   'include-verse-numbers': req.query.includeVerseNumbers,
  //   page: req.query.page
  // };

  const searchParams = `${api_url}${searchConfig.searchType}/?${queryString.stringify(searchConfig.searchRequest)}`;
  try {
    const result = await axios.get(searchParams, { headers: { Authorization: `Token ${api_key}` } });
    if (
      (result.data.passages && !result.data.passages.length) ||
      (result.data.results && !result.data.results.length)
    ) {
      res.status(400).send('search returned no results');
      return;
    }
    if (searchConfig.searchType === 'text') {
      res.json(result.data.passages[0].split('\n'));
    } else {
      console.log(result.data);
      res.json(result.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export default search;
