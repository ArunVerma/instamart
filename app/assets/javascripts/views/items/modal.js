Instamart.Views.ItemModal = Marionette.ItemView.extend({
  template: JST['items/modal'],

  events: {
    'click .item-detail-overlay': 'dismiss',
    'click .close' : 'dismiss'
  },

  className: 'item-detail hide',

  initialize: function () {
    $('.item-detail-overlay').click(this.dismiss);
    this.qty_in_cart = Instamart.currentUser.qtyInCart(this.model.id);
    this.display_price = parseFloat(this.model.get('price')).toFixed(2);
  },

  dismiss: function (event) {
    event.preventDefault();
    $('.item-detail-overlay').css({ 'display': 'none' });
    $('.item-detail.hide').css({ 'display': 'none' });
  },

  templateHelpers: function () {
    return {
      qty_in_cart: this.qty_in_cart,
      price: this.display_price
    }
  }
});
