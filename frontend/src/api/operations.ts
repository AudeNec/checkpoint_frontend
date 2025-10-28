import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      id
      name
      code
    }
  }
`;

export const GET_COUNTRY_DETAILS = gql`
  query GetCountryDetails($id: ID!) {
    country(id: $id) {
      id
      name
      code
      emoji
    }
  }
`;

export const ADD_COUNTRY = gql`
  mutation AddCountry($name: String!, $code: String!, $emoji: String!) {
    addCountry(name: $name, code: $code, emoji: $emoji) {
      id
      name
      code
      emoji
    }
  }
`;
