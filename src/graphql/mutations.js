/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComidas = /* GraphQL */ `
  mutation CreateComidas(
    $input: CreateComidasInput!
    $condition: ModelComidasConditionInput
  ) {
    createComidas(input: $input, condition: $condition) {
      id
      name
      description
      price
      createdAt
      updatedAt
    }
  }
`;
export const updateComidas = /* GraphQL */ `
  mutation UpdateComidas(
    $input: UpdateComidasInput!
    $condition: ModelComidasConditionInput
  ) {
    updateComidas(input: $input, condition: $condition) {
      id
      name
      description
      price
      createdAt
      updatedAt
    }
  }
`;
export const deleteComidas = /* GraphQL */ `
  mutation DeleteComidas(
    $input: DeleteComidasInput!
    $condition: ModelComidasConditionInput
  ) {
    deleteComidas(input: $input, condition: $condition) {
      id
      name
      description
      price
      createdAt
      updatedAt
    }
  }
`;
