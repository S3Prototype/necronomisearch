import { inputLabel } from 'aws-amplify';
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
    let maxResults = 30;
    // console.log("What we got to work with:",content);
    let endReached = false;
    for(let i = 0; i < content.length && !endReached && rawTextChunks.length <= maxResults; i += maxChunkLength){
        if(i + maxChunkLength >= content.length){
            //Then maxChunkLength should bring us
            //to the last index of content
            maxChunkLength = content.length - i - 1;
            endReached = true;
        }
        let contentRange = content.substr(i, maxChunkLength);
        //     //strip out excess edges of <br/> tags that got cut off.
        // if(contentRange.indexOf('>') >= 0) contentRange = contentRange.slice(contentRange.indexOf('>')+1);
        // // console.log("contentRange after slice", contentRange);
        // if(contentRange.indexOf('<') >= 0) contentRange = contentRange.slice(0, contentRange.indexOf('<')-1);
        // // console.log("contentRange after 2nd slice", contentRange);
        rawTextChunks.push({text: "..."+contentRange+"..."})
    }

    const options = {
        isCaseSensitive: false,
        includeScore: true,
        shouldSort: true,
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

    let results = fuse.search(query);

    results = results.map(result=>{
        result.matches = result.matches.map(match=>{
            let text = match.value;
            const openSpan = "<span class='query-text'>";
            const closeSpan = "</span>";
            match.indices.forEach((index, i)=>{
                const addedLength = openSpan.length*i + closeSpan.length*i;
                const openLocation = index[0] + addedLength;
                text = [
                    text.slice(0, openLocation), openSpan, text.slice(openLocation)
                ].join('');
                const closeLocation = index[1] + addedLength + openSpan.length + 1;
                text = [
                    text.slice(0, closeLocation), closeSpan, text.slice(closeLocation)
                ].join('');
                match.value = text;
            })
            return match;
        })
        return result;
    });

    console.log("Our results", results);

    const finalResult = results.map(result=>result.matches.map(match=>match.value));
      
    console.log("Search results!", finalResult);
    return finalResult;
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