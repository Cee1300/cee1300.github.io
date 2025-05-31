/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuoteRequest = /* GraphQL */ `
  query GetQuoteRequest($id: ID!) {
    getQuoteRequest(id: $id) {
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
export const listQuoteRequests = /* GraphQL */ `
  query ListQuoteRequests(
    $filter: ModelQuoteRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuoteRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        message
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPolicy = /* GraphQL */ `
  query GetPolicy($id: ID!) {
    getPolicy(id: $id) {
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
export const listPolicies = /* GraphQL */ `
  query ListPolicies(
    $filter: ModelPolicyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPolicies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getClaim = /* GraphQL */ `
  query GetClaim($id: ID!) {
    getClaim(id: $id) {
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
export const listClaims = /* GraphQL */ `
  query ListClaims(
    $filter: ModelClaimFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClaims(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        policyId
        dateFiled
        status
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
