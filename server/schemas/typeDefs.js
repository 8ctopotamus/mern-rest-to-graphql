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

  type Mutation {
    addTech(name: String!): Tech
    updateTech(_id: ID!, name: String!): Tech
    deleteTech(_id: ID!): ID

    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: ID!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs