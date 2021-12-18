const { Matchup, Tech } = require('../models')

const resolvers = {
  Query: {
    tech: async () => {
      return await Tech.find({})
    },
    matchups: async (parent, { _id }) => {
      const findQuery = _id ? { _id } : {}
      return await Matchup.find(findQuery)
    }
  }
}

module.exports = resolvers