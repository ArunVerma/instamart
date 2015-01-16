Instamart.Views.CartSidebar = Marionette.ItemView.extend({
  template: JST['nav/cart_sidebar'],

  tagName: 'section',

  initialize: function () {
    this.listenTo(this.collection, "add remove sync change", this.render);
    this._items    = Instamart.currentUser.cartItems();
    this._count    = Instamart.currentUser.numCartItems();
    this._subtotal = Instamart.currentUser.cartSubtotal();
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
      count    : this._count
    }
  }
})
