/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateUserMutationVariables = {
    name: string;
    email: string;
    password: string;
};
export type CreateUserMutationResponse = {
    readonly createUser: {
        readonly id: string;
    };
};
export type CreateUserMutation = {
    readonly response: CreateUserMutationResponse;
    readonly variables: CreateUserMutationVariables;
};



/*
mutation CreateUserMutation(
  $name: String!
  $email: String!
  $password: String!
) {
  createUser(name: $name, email: $email, password: $password) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "createUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateUserMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateUserMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "4df97caaf8557f242a18655a4845480f",
    "id": null,
    "metadata": {},
    "name": "CreateUserMutation",
    "operationKind": "mutation",
    "text": "mutation CreateUserMutation(\n  $name: String!\n  $email: String!\n  $password: String!\n) {\n  createUser(name: $name, email: $email, password: $password) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '781507d68b31f16ce1437453b1bbc2c5';
export default node;
