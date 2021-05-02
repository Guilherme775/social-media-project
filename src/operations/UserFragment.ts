import { graphql } from 'babel-plugin-relay/macro';

export default graphql`
    fragment UserFragment_Infos on User {
        name
        email
    }
`;