import { graphql } from "babel-plugin-relay/macro";

export default graphql`
  mutation SignInMutation($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`;
