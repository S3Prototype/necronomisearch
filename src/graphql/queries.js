/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      bookTitle
      bookShortName
      bookContentID
      createdAt
      updatedAt
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bookTitle
        bookShortName
        bookContentID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBookContent = /* GraphQL */ `
  query GetBookContent($id: ID!) {
    getBookContent(id: $id) {
      id
      bookTitle
      bookShortName
      bookContent
      createdAt
      updatedAt
    }
  }
`;
export const listBookContents = /* GraphQL */ `
  query ListBookContents(
    $filter: ModelBookContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bookTitle
        bookShortName
        bookContent
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
