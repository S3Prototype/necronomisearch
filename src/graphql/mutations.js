/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
      id
      bookTitle
      bookShortName
      bookContentID
      createdAt
      updatedAt
    }
  }
`;
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
      id
      bookTitle
      bookShortName
      bookContentID
      createdAt
      updatedAt
    }
  }
`;
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
      id
      bookTitle
      bookShortName
      bookContentID
      createdAt
      updatedAt
    }
  }
`;
export const createBookContent = /* GraphQL */ `
  mutation CreateBookContent(
    $input: CreateBookContentInput!
    $condition: ModelBookContentConditionInput
  ) {
    createBookContent(input: $input, condition: $condition) {
      id
      bookTitle
      bookShortName
      bookContent
      createdAt
      updatedAt
    }
  }
`;
export const updateBookContent = /* GraphQL */ `
  mutation UpdateBookContent(
    $input: UpdateBookContentInput!
    $condition: ModelBookContentConditionInput
  ) {
    updateBookContent(input: $input, condition: $condition) {
      id
      bookTitle
      bookShortName
      bookContent
      createdAt
      updatedAt
    }
  }
`;
export const deleteBookContent = /* GraphQL */ `
  mutation DeleteBookContent(
    $input: DeleteBookContentInput!
    $condition: ModelBookContentConditionInput
  ) {
    deleteBookContent(input: $input, condition: $condition) {
      id
      bookTitle
      bookShortName
      bookContent
      createdAt
      updatedAt
    }
  }
`;
