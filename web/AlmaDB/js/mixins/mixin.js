export const Mixin = {
  created: function() {
    init();
  },
  methods: {
    init: function() {
      console.log('HI Mixin');
    }
  }
}
