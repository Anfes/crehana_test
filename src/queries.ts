import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      emoji
      continent {
        name
      }
      currency
    }
  }
`;

export const GET_COUNTRY_DETAILS = gql`
  query GetCountryDetails($code: ID!) {
    country(code: $code) {
      code
      name
      currency
      continent {
        name
      }
      languages {
        name
      }
      capital
    }
  }
`;
