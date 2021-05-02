import { graphql } from 'babel-plugin-relay/macro';

export default graphql`
    query UserQuery($id: String!) {
        user(id: $id) {
            ...UserFragment_Infos
        }
    }
`;