/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TweetsQueryVariables = {
    first: number;
};
export type TweetsQueryResponse = {
    readonly tweets: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"TweetsFragment_Posts">;
            };
        }>;
    };
};
export type TweetsQuery = {
    readonly response: TweetsQueryResponse;
    readonly variables: TweetsQueryVariables;
};



/*
query TweetsQuery(
  $first: Float!
) {
  tweets(first: $first) {
    edges {
      node {
        ...TweetsFragment_Posts
        id
      }
    }
  }
}

fragment TweetsFragment_Posts on Tweet {
  id
  author {
    name
    id
  }
  description
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TweetsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TweetConnection",
        "kind": "LinkedField",
        "name": "tweets",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TweetEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Tweet",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "TweetsFragment_Posts"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TweetsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TweetConnection",
        "kind": "LinkedField",
        "name": "tweets",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TweetEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Tweet",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
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
                      },
                      (v2/*: any*/)
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
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4db6eaa1014088e5fb05149ff1b07aa8",
    "id": null,
    "metadata": {},
    "name": "TweetsQuery",
    "operationKind": "query",
    "text": "query TweetsQuery(\n  $first: Float!\n) {\n  tweets(first: $first) {\n    edges {\n      node {\n        ...TweetsFragment_Posts\n        id\n      }\n    }\n  }\n}\n\nfragment TweetsFragment_Posts on Tweet {\n  id\n  author {\n    name\n    id\n  }\n  description\n}\n"
  }
};
})();
(node as any).hash = 'c043bee731ea08f4b6c70e47b7d8da38';
export default node;
