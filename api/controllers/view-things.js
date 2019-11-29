module.exports = {


  friendlyName: 'View things',


  description: 'Display "Things" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/things'
    }

  },

  fn: async function () {

    let things = await Thing.find({
      owner: this.req.me.id,
    });

    return {things};
  },

};
