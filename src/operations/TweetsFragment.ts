import { graphql } from 'babel-plugin-relay/macro';

export default graphql`
    fragment TweetsFragment_Posts on Tweet {
        id
        author {
            name
        }
        description
    }
`;