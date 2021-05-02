/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserFragment_Infos = {
    readonly name: string | null;
    readonly email: string | null;
    readonly " $refType": "UserFragment_Infos";
};
export type UserFragment_Infos$data = UserFragment_Infos;
export type UserFragment_Infos$key = {
    readonly " $data"?: UserFragment_Infos$data;
    readonly " $fragmentRefs": FragmentRefs<"UserFragment_Infos">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserFragment_Infos",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '75103307638e61fc6219849e416820fe';
export default node;
