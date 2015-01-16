Instamart.Views.CartSidebar = Marionette.ItemView.extend({
  tagName: 'section',

  initialize: function () {
    this.listenTo(Instamart.cartItems, "remove add change", this.render);
    this._items    = Instamart.currentUser.cartItems();
    this._count    = this._items.length;
    this._subtotal = Instamart.currentUser.cartSubtotal();
    this._reason   = this.getReason();
  },

  getTemplate: function () {
    if (this._items.length === 0) {
      return JST['nav/cart_sidebar_empty'];
    } else if (this._subtotal < 10 ) {
      return JST['nav/cart_sidebar_min'];
    } else {
      return JST['nav/cart_sidebar'];
    }
  },

  getReason: function () {
    if (this._subtotal < 35) {
      var diff = (35 - this._subtotal).toFixed(2);
      return "Add only $" + diff + " for $3.99 delivery!";
    } else {
      return "Only $3.99 for orders over $35.00!";
    }
  },

  onBeforeRender: function () {
    this._items    = Instamart.currentUser.cartItems();
    this._count    = this._items.length;
    this._subtotal = Instamart.currentUser.cartSubtotal();
    this._reason   = this.getReason();
  },

  onRender: function () {
    // Add items to cart
    if (this._items.length > 0) {
      _(this._items).each(function (item) {
        view = new Instamart.Views.CartItem({ model: item });
        this.$el.find('tbody.pri').append(view.render().el);
      }.bind(this))
    }
  },

  templateHelpers: function () {
    return {
      subtotal : this._subtotal,
      count    : this._count,
      reason   : this._reason
    }
  }
})
