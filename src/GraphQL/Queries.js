import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
query Products {
  products(first: 10) {
    edges {
      node {
        title
      }
    }
  }
}
`;