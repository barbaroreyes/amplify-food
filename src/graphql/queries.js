/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComidas = /* GraphQL */ `
  query GetComidas($id: ID!) {
    getComidas(id: $id) {
      id
      name
      description
      price
      createdAt
      updatedAt
    }
  }
`;
export const listComidas = /* GraphQL */ `
  query ListComidas(
    $filter: ModelComidasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComidas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
