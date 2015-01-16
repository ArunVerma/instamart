Instamart.Views.ItemModal = Marionette.ItemView.extend({
  template: JST['items/modal'],

  events: {
    'click .item-detail-overlay' : 'dismiss',
    'click .close'               : 'dismiss',
    'click button.inc'           : 'addToCart',
    'click button.dec'           : 'removeFromCart'
  },

  className: 'item-detail hide',

  initialize: function () {
    this.listenTo(Instamart.cartItems, 'sync', this.updateView);
    $('.item-detail-overlay').click(this.dismiss);
    this.qty_in_cart = Instamart.currentUser.qtyInCart(this.model.id);
    this.display_price = parseFloat(this.model.get('price')).toFixed(2);
  },

  updateView: function () {
    this.qty_in_cart = Instamart.currentUser.qtyInCart(this.model.id);
    this.display_price = parseFloat(this.model.get('price')).toFixed(2);
    this.render();
  },

  dismiss: function (event) {
    event.preventDefault();
    $('.item-detail-overlay').hide();
    $('.item-detail.hide').hide();
  },

  addToCart: function (e) {
    Instamart.currentUser.addToCart(this.model.id);
  },

  removeFromCart: function (e) {
    Instamart.currentUser.removeFromCart(this.model.id);
  },

  onRender: function () {
    console.log(this.qty_in_cart);
    if (this.qty_in_cart > 0) {
      $('button.dec').show();
      $('.item-quantity.item-modal').show();
    } else {
      $('button.dec').hide();
      $('.item-quantity.item-modal').hide();
    }
  },

  templateHelpers: function () {
    return {
      qty_in_cart : this.qty_in_cart,
      price       : this.display_price
    }
  }
});
