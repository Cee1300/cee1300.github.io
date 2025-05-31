/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuoteRequest = /* GraphQL */ `
  subscription OnCreateQuoteRequest(
    $filter: ModelSubscriptionQuoteRequestFilterInput
  ) {
    onCreateQuoteRequest(filter: $filter) {
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
export const onUpdateQuoteRequest = /* GraphQL */ `
  subscription OnUpdateQuoteRequest(
    $filter: ModelSubscriptionQuoteRequestFilterInput
  ) {
    onUpdateQuoteRequest(filter: $filter) {
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
export const onDeleteQuoteRequest = /* GraphQL */ `
  subscription OnDeleteQuoteRequest(
    $filter: ModelSubscriptionQuoteRequestFilterInput
  ) {
    onDeleteQuoteRequest(filter: $filter) {
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
export const onCreatePolicy = /* GraphQL */ `
  subscription OnCreatePolicy($filter: ModelSubscriptionPolicyFilterInput) {
    onCreatePolicy(filter: $filter) {
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
export const onUpdatePolicy = /* GraphQL */ `
  subscription OnUpdatePolicy($filter: ModelSubscriptionPolicyFilterInput) {
    onUpdatePolicy(filter: $filter) {
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
export const onDeletePolicy = /* GraphQL */ `
  subscription OnDeletePolicy($filter: ModelSubscriptionPolicyFilterInput) {
    onDeletePolicy(filter: $filter) {
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
export const onCreateClaim = /* GraphQL */ `
  subscription OnCreateClaim($filter: ModelSubscriptionClaimFilterInput) {
    onCreateClaim(filter: $filter) {
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
export const onUpdateClaim = /* GraphQL */ `
  subscription OnUpdateClaim($filter: ModelSubscriptionClaimFilterInput) {
    onUpdateClaim(filter: $filter) {
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
export const onDeleteClaim = /* GraphQL */ `
  subscription OnDeleteClaim($filter: ModelSubscriptionClaimFilterInput) {
    onDeleteClaim(filter: $filter) {
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
