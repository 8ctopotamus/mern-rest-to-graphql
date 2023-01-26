const resolvers = {
  Query: {
    matchups: () => {
      return [{
        _id: 1,
        tech1: "test",
        tech2: "test",
        tech1_votes: 1,
        tech2_votes: 1,
      }]
    },
    techs: () => {
      return []
    }
  }
}

module.exports = resolvers