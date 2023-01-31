import { gql } from "@apollo/client";

export const CREATE_MATCHUP = gql`
  mutation CREATE_MATCHUP($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
      _id
    }
  }
`

export const CREATE_VOTE = gql`
  mutation CREATE_VOTE($_id: ID!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`