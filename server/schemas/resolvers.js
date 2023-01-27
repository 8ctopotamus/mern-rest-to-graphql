const { Tech, Matchup } = require('../models')

const resolvers = {
  Query: {
    techs: async () => {
      return await Tech.find()
    },
    matchups: async () => {
      return await Matchup.find()
    }
  }
}

module.exports = resolvers