// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bok } = initSchema(schema);

export {
  Bok
};