parasails.registerPage('privacy', {
//initial state
  data: {
    //…
  },

 //life cycle
  beforeMount: function() {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
  },
  mounted: async function(){
    //…
  },

 //methods
  methods: {
    //…
  }
});
