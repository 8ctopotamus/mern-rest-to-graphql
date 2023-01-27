const { Tech, Matchup } = require('../models')

const resolvers = {
  Query: {
    techs: async () => {
      return await Tech.find()
    },
    tech: async (parent, { _id, name }, context, info) => {
      if (name) {
        return await Tech.findOne({ name })
      }

      return await Tech.findById(_id)
    },
    matchups: async () => {
      return await Matchup.find()
    },
    matchup: async (parent, args, context, info) => {
      return await Matchup.findById(args._id)
    }
  }
}

module.exports = resolvers