module.exports = {

  friendlyName: 'Destroy one thing',
  description: 'the id of the thing object to destroy in db',

  inputs: {
    id: {
      type: 'string',
      required: true,
      example: '5de09991acb98ae14dc9d06c',
    },
  },

  exits: {},

  fn: async function (input) {

    await Thing.destroy({id:input.id});
    // All done.
    return;

  },

};
