//fontend
parasails.registerPage('homepage', {
//initial state
  data: {},

  //life cycle
  beforeMount: function () {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
  },
  mounted: async function () {

  },

  //methods
  methods: {
    click(id){
      alert(id);
    },
    async removeThingItem(id) {
      this.click(id);
      await Cloud.destroyOneThing.with({id});
      _.remove(this.things, {id});
      this.$forceUpdate();
    },
  },
});
