import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Book {
  readonly id: string;
  readonly bookTitle: string;
  readonly bookShortName: string;
  readonly bookContentID: string;
  constructor(init: ModelInit<Book>);
  static copyOf(source: Book, mutator: (draft: MutableModel<Book>) => MutableModel<Book> | void): Book;
}

export declare class BookContent {
  readonly id: string;
  readonly bookTitle: string;
  readonly bookShortName: string;
  readonly bookContent: string;
  constructor(init: ModelInit<BookContent>);
  static copyOf(source: BookContent, mutator: (draft: MutableModel<BookContent>) => MutableModel<BookContent> | void): BookContent;
}