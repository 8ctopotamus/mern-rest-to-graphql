import { gql } from '@apollo/client'

export const GET_ALL_MATCHUPS = gql`
  query ALL_MATCHUPS {
    matchups {
      _id
      tech1
      tech2
    }
  }
`

export const GET_ALL_TECHS = gql`
  query ALL_TECHS {
    techs {
      _id
      name
    }
  }
`