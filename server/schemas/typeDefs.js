const typeDefs = `
  type Tech {
    _id: ID!
    name: String!
  }

  type Matchup {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    techs: [Tech]
    tech(_id: ID, name: String): Tech

    matchups: [Matchup]
    matchup(_id: ID!): Matchup 
  }
`;

module.exports = typeDefs