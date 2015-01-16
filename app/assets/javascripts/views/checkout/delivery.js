Instamart.Views.Delivery = Marionette.ItemView.extend({
  template: JST["checkout/delivery"],

  className: 'delivery content-panel',

  events: {
    'click button.btn-next' : 'nextStep'
  },

  nextStep: function () {
    Backbone.history.navigate("checkout/payment", {trigger : true});
  }
})
