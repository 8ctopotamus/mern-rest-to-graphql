const typeDefs = `
  type Matchup {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Tech {
    _id: ID!
    name: String!
  }

  type Query {
    matchups: [Matchup]
    techs: [Tech]
  }
`

module.exports = typeDefs