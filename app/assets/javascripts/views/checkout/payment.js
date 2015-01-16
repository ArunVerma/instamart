Instamart.Views.Payment = Marionette.ItemView.extend({
  template: JST["checkout/payment"],

  className: 'payment content-panel',

  initialize: function () {
    this.subtotal = Instamart.currentUser.cartSubtotal();
    this.fees     = this.getFees();
    this.total    = parseFloat(this.subtotal + this.fees).toFixed(2);
  },

  getFees: function () {
    if (this.subtotal >= 35) {
      return 3.99;
    } else {
      return 7.99;
    }
  },

  templateHelpers: function () {
    return {
      subtotal : this.subtotal,
      fees     : this.fees,
      total    : this.total
    }
  }
})
