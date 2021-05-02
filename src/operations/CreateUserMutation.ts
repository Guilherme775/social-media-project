import { graphql } from 'babel-plugin-relay/macro';

export default graphql`
    mutation CreateUserMutation($name: String!, $email: String!, $password: String!) {
        createUser(name: $name, email: $email, password: $password) {
            id
        }
    } 
`;