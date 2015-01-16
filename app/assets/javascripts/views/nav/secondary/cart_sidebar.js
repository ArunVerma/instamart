Instamart.Views.CartSidebar = Marionette.ItemView.extend({
  template: JST['nav/cart_sidebar'],

  tagName: 'section',

  initialize: function () {
    this.listenTo(Instamart.cartItems, 'sync change add remove refresh', this.updateQty);
    this._items = Instamart.currentUser.cartItems();
    this._subtotal = Instamart.currentUser.cartSubtotal();
  },

  updateQty: function () {
    this.qty_in_cart = Instamart.currentUser.qtyInCart(this.model.get('item_id'));
    this.render();
  },

  onRender: function () {
    // Add items to cart
    _(this._items).each(function (item) {
      view = new Instamart.Views.CartItem({ model: item });
      this.$el.find('tbody').append(view.render().el);
    }.bind(this))
  },

  templateHelpers: function () {
    return {
      subtotal : this._subtotal,
      count    : this._items.length
    }
  }
})
