import Fuse from 'fuse.js';
// import Amplify, {API, graphqlOperation} from 'aws-amplify';
// import awsconfig from '../aws-exports';

const Amplify = require('aws-amplify');
const {API, graphqlOperation} = Amplify;
const awsconfig = require('../aws-exports');
const { getBookContent } = require('../graphql/queries');
const queries = require('../graphql/queries');

async function queryBook(book){
    return await API.graphql(
        graphqlOperation(
            queries.getBookContent, {id: book}
        )
    )
}

function getSearchResults(books){
    console.log("Searching for", books);
    return Promise.all(books.map(book=>queryBook(book)))
    // return returnedContent;
}

function findQueryInBook(content, query){
    //Find every instance of the query
    //Find the previous instance of \n
    //Find the next instance of \n
    //Add that to an array
    //return the array

        //Break text into chunks.
    const rawTextChunks = [];
    let maxChunkLength = 900;
    let maxSearchLength = maxChunkLength;
    console.log(content.length);

    let endReached = false;
    for(let i = 0; i < content.length && !endReached; i += maxChunkLength){
        if(i + maxChunkLength >= content.length){
            //Then maxChunkLength should bring us
            //to the last index of content
            maxChunkLength = content.length - i - 1;
            endReached = true;
        }
        rawTextChunks.push({text: "..."+content.substr(i, maxChunkLength)+"..."})
    }

    const options = {
        isCaseSensitive: false,
        includeScore: true,
        shouldSort: false,
        includeMatches: true,
        findAllMatches: true,
        minMatchCharLength: query.length,
        // location: 0,
        // threshold: 0.6,
        distance: maxSearchLength,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        keys: [
          "text"
        ]
      };
      
      const fuse = new Fuse(rawTextChunks, options);

      const result = fuse.search(query);
      
      console.log("Search results!", result);
      return result;
}

function processResults(results, query){
    // const info = results.map(result=>result.data.getBookContent);
    // const matches = findQueryInBook(info, query);

    // const rawResults = results.map(result=>result.data.getBookContent);
    return results.map(result=>{
        const info = result.data.getBookContent;
        const matches = findQueryInBook(info.bookContent, query);
        return {
            title: info.bookTitle,
            shortName: info.bookShortName,
            matches
        }
    });
}

export {
    getSearchResults,
    processResults
}