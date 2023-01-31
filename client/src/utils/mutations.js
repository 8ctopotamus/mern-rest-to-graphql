import { gql } from "@apollo/client";

export const CREATE_MATCHUP = gql`
  mutation CREATE_MATCHUP($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
      _id
    }
  }
`