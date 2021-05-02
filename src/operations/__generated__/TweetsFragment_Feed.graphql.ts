/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TweetsFragment_Feed = {
    readonly id: string;
    readonly author: {
        readonly name: string | null;
    } | null;
    readonly description: string;
    readonly " $refType": "TweetsFragment_Feed";
};
export type TweetsFragment_Feed$data = TweetsFragment_Feed;
export type TweetsFragment_Feed$key = {
    readonly " $data"?: TweetsFragment_Feed$data;
    readonly " $fragmentRefs": FragmentRefs<"TweetsFragment_Feed">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TweetsFragment_Feed",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "author",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "Tweet",
  "abstractKey": null
};
(node as any).hash = 'd6bff64c9bd88b5edbfe447478a21c6a';
export default node;
