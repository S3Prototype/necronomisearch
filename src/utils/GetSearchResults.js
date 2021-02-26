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

async function getSearchResults(books){
    console.log("Searching for", books);
    return Promise.all(books.map(book=>queryBook(book)))
    // return returnedContent;
}

module.exports = {
    getSearchResults
}