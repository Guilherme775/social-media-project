import { graphql } from 'babel-plugin-relay/macro';

export default graphql`
    query TweetsQuery($first: Float!) {
        tweets(first: $first) {
            edges {
                node {
                    ...TweetsFragment_Feed
                }
            }
        }
    }
`;