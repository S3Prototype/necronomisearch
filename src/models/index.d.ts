import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Bok {
  readonly id: string;
  readonly bookTitle: string;
  readonly bookContent: string;
  constructor(init: ModelInit<Bok>);
  static copyOf(source: Bok, mutator: (draft: MutableModel<Bok>) => MutableModel<Bok> | void): Bok;
}