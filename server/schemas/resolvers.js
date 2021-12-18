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
  },
  Mutation: {
    createMatchup: async (parent, args) => {
      return await Matchup.create(args)
    },
    createVote: async (parent, { _id, techNum }) => {
      const updatedMatchup = await Matchup.findOneAndUpdate(
        { _id: _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return updatedMatchup
    }
  }
}

module.exports = resolvers