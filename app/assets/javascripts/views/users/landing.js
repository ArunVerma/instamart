Instamart.Views.Landing = Backbone.Marionette.ItemView.extend({
  template: JST['users/landing'],

  events: {
    'click button' : 'gotoSignup',
    'submit form'  : 'gotoSignup'
  },

  gotoSignup: function () {
    Backbone.history.navigate('signup', {trigger : true});
  }
});
