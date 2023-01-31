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
  },
  Mutation: {
    addTech: async (parent, args, context, info) => {
      return await Tech.create(args)
    },
    updateTech: async (parent, args, context, info) => {
      return await Tech.findByIdAndUpdate(
        args._id, 
        { name: args.name }, 
        { new: true }
      )
    },
    deleteTech: async (parent, args, context, info) => {
      await Tech.findByIdAndDelete(args._id)
      return args._id
    },
    createMatchup: async (parent, args, context, info) => {
      const matchup = await Matchup.create(args);
      return matchup
    },
    createVote: async (parent, { _id, techNum }, context, info) => {
      const matchup = await Matchup.findOneAndUpdate(
        { _id: _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return matchup
    },
  }
}

module.exports = resolvers