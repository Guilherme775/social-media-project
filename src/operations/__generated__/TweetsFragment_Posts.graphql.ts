/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TweetsFragment_Posts = {
    readonly id: string;
    readonly author: {
        readonly name: string | null;
    } | null;
    readonly description: string;
    readonly " $refType": "TweetsFragment_Posts";
};
export type TweetsFragment_Posts$data = TweetsFragment_Posts;
export type TweetsFragment_Posts$key = {
    readonly " $data"?: TweetsFragment_Posts$data;
    readonly " $fragmentRefs": FragmentRefs<"TweetsFragment_Posts">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TweetsFragment_Posts",
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
(node as any).hash = 'a7e52bf2a9a27c0ddc59524c236c7e71';
export default node;
