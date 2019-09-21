// import queryString from 'query-string';
// import * as config from './config';
// export default class Query {
//   constructor(passage, settings) {
//     this.passage = passage;
//     this.settings =
//   }
//   buildQuery() {
//     let settings = {
//       'indent-poetry': this.settings['include-footnotes'],
//       'include-headings': this.settings['include-headings'],
//       'include-footnotes': this.settings['include-footnotes'],
//       'include-verse-numbers': this.settings['include-verse-numbers'],
//     };
//     let queryParams = {};
//     // this.passage = passage;
//     queryParams.q = this.passage;
//     Object.keys(settings).map((key) => {
//       queryParams[key] = settings[key];
//     });

//     // queryParams = Object.assign(queryParams, obj);

//     // const url = config.API_URL;
//     // const buildQuery = async (passage, ) => {
//     //   const config = {
//     //     q: 'john 3:15',
//     //     'include-footnotes': settings,
//     //   };
//     const url = config.esvConfig.API_URL + queryString.stringify(queryParams);
//     return url;
//   }

//   //   const requestOptions = {
//   //     headers: {
//   //       Authorization: API_KEY,
//   //     },
//   //   };
//   //   try {
//   //     // let result = await axios.get(`${url}/text/?q=john 3:15`, { headers: { Authorization: token } });
//   //     const result = await axios.get(x, requestOptions);
//   //     const string = result.data.passages[0].replace(/\s+/g, ' ').trim();
//   //     return string;
//   //     // return
//   //   } catch (error) {
//   //     console.log(error)
//   //     throw error;
//   //   }
//   // };
// }
