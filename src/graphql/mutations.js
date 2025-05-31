/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuoteRequest = /* GraphQL */ `
  mutation CreateQuoteRequest(
    $input: CreateQuoteRequestInput!
    $condition: ModelQuoteRequestConditionInput
  ) {
    createQuoteRequest(input: $input, condition: $condition) {
      id
      name
      email
      phone
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateQuoteRequest = /* GraphQL */ `
  mutation UpdateQuoteRequest(
    $input: UpdateQuoteRequestInput!
    $condition: ModelQuoteRequestConditionInput
  ) {
    updateQuoteRequest(input: $input, condition: $condition) {
      id
      name
      email
      phone
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteQuoteRequest = /* GraphQL */ `
  mutation DeleteQuoteRequest(
    $input: DeleteQuoteRequestInput!
    $condition: ModelQuoteRequestConditionInput
  ) {
    deleteQuoteRequest(input: $input, condition: $condition) {
      id
      name
      email
      phone
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPolicy = /* GraphQL */ `
  mutation CreatePolicy(
    $input: CreatePolicyInput!
    $condition: ModelPolicyConditionInput
  ) {
    createPolicy(input: $input, condition: $condition) {
      id
      policyNumber
      holderName
      effectiveDate
      expiryDate
      premiumAmount
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePolicy = /* GraphQL */ `
  mutation UpdatePolicy(
    $input: UpdatePolicyInput!
    $condition: ModelPolicyConditionInput
  ) {
    updatePolicy(input: $input, condition: $condition) {
      id
      policyNumber
      holderName
      effectiveDate
      expiryDate
      premiumAmount
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePolicy = /* GraphQL */ `
  mutation DeletePolicy(
    $input: DeletePolicyInput!
    $condition: ModelPolicyConditionInput
  ) {
    deletePolicy(input: $input, condition: $condition) {
      id
      policyNumber
      holderName
      effectiveDate
      expiryDate
      premiumAmount
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createClaim = /* GraphQL */ `
  mutation CreateClaim(
    $input: CreateClaimInput!
    $condition: ModelClaimConditionInput
  ) {
    createClaim(input: $input, condition: $condition) {
      id
      policyId
      dateFiled
      status
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateClaim = /* GraphQL */ `
  mutation UpdateClaim(
    $input: UpdateClaimInput!
    $condition: ModelClaimConditionInput
  ) {
    updateClaim(input: $input, condition: $condition) {
      id
      policyId
      dateFiled
      status
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteClaim = /* GraphQL */ `
  mutation DeleteClaim(
    $input: DeleteClaimInput!
    $condition: ModelClaimConditionInput
  ) {
    deleteClaim(input: $input, condition: $condition) {
      id
      policyId
      dateFiled
      status
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
