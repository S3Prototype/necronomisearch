// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Book, BookContent } = initSchema(schema);

export {
  Book,
  BookContent
};