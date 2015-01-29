Instamart.Views.ItemView = Marionette.ItemView.extend({
  template: JST['items/view'],

  tagName: 'li',

  className: 'has-details item',

  events: {
    'click button.inc' : 'addItemToCart',
    'click button.dec' : 'removeItemFromCart',
    'click'            : 'showModal',
    'mouseenter'       : 'mouseEnter',
    'mouseleave'       : 'mouseExit'
  },

  initialize: function () {
    this.listenTo(Instamart.cartItems, 'remove add change', this.render);
    this.qty_in_cart = Instamart.currentUser.qtyInCart(this.model.id);
    this.display_price = parseFloat(this.model.get('price')).toFixed(2);
  },

  onRender: function () {
    // If item exists in cart, show UI elements
    if (this.qty_in_cart > 0) {
      this.$el.find('button.dec').show();
      this.$el.find('.item-quantity-small').show();
    } else {
      this.$el.find('button.dec').hide();
      this.$el.find('.item-quantity-small').hide();
    }
  },

  onBeforeRender: function () {
    this.qty_in_cart = Instamart.currentUser.qtyInCart(this.model.id);
  },

  mouseEnter: function () {
    if (this.qty_in_cart > 0) {
      this.$el.find('.item-quantity-small').hide();
      this.$el.find('.item-quantity').show();
    }
  },

  mouseExit: function () {
    if (this.qty_in_cart > 0) {
      this.$el.find('.item-quantity-small').show();
      this.$el.find('.item-quantity').hide();
    }
  },

  addItemToCart: function (e) {
    Instamart.currentUser.addToCart(this.model.id);
    e.stopPropagation();
    this.render();
  },

  removeItemFromCart: function (e) {
    Instamart.currentUser.removeFromCart(this.model.id);
    e.stopPropagation();
    this.render();
  },

  showModal: function () {
    var modal = new Instamart.Views.ItemModal({ model: this.model });
    modal.setElement($('.item-detail.hide')).render();
    $('.item-detail-overlay').css({ 'display': 'block' });
    $('.item-detail.hide').css({ 'display': 'block' });
  },

  templateHelpers: function () {
    return {
      qty_in_cart: this.qty_in_cart,
      price: this.display_price
    }
  }
})
