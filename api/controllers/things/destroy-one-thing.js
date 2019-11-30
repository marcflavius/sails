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

  exits: {
    forbidden: {
      description: 'throw an error when wrong user try to remove on owned thing',
      // responseType:'forbidden'
    },
  },

  fn: async function (input) {

    const thing = await Thing.findOne({
      id: input.id
    });

    if (thing.id === this.req.me.id) {
      throw 'forbidden';
    }
    await Thing.destroy({id: input.id});
    // All done.
    return;

  },

};
