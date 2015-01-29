Instamart.Views.SecondaryNav = Marionette.ItemView.extend({
  template: JST['nav/secondary'],

  className: 'navbar-inner',

  id: 'sub-nav-wrapper',

  events: {
    'click #cart-in-nav': 'toggleCartSidebar'
  },

  initialize: function () {
    this.cartSubtotal = Instamart.currentUser.cartSubtotal();
    this.cartQty      = Instamart.currentUser.cartItems().length;
    this.fee          = this.getFee();
    this.reason       = this.getReason();
    this.count        = this.getCount();

    this.listenTo(Instamart.cartItems, 'remove add change', this.render);
  },

  onBeforeRender: function () {
    this.cartSubtotal = Instamart.currentUser.cartSubtotal();
    this.cartQty      = Instamart.currentUser.cartItems().length;
    this.fee          = this.getFee();
    this.reason       = this.getReason();
    this.count        = this.getCount();
  },

  toggleCartSidebar: function () {
    $('#cart-in-nav').toggleClass('minimized');
    $('#cart-sidebar').toggleClass('minimized');
    $('.outside-container .container-fluid').toggleClass('cart-minimized');
    this.toggleCartIcon();
  },

  toggleCartIcon: function () {
    if ($('i.toggle-cart').attr('class') === 'icon-chevron-down toggle-cart') {
      $('i.toggle-cart').attr('class', 'icon-chevron-right toggle-cart');
    } else {
      $('i.toggle-cart').attr('class', 'icon-chevron-down toggle-cart');
    }
  },

  getFee: function () {
    if (this.cartSubtotal < 10) {
      return "10 min";
    } else if (this.cartSubtotal < 35) {
      return 7.99;
    } else {
      return 3.99;
    }
  },

  getCount: function () {
    if (this.cartQty < 2) {
      return this.cartQty + ' item';
    } else {
      return this.cartQty + ' items';
    }
  },

  getReason: function () {
    if (this.cartSubtotal < 35) {
      var diff = (35 - this.cartSubtotal).toFixed(2);
      return "Add only $" + diff + " for $3.99 delivery!";
    } else {
      return "Only $3.99 for orders over $35.00!";
    }
  },

  templateHelpers: function () {
    return {
      dept     : this.model,
      fee      : this.fee,
      reason   : this.reason,
      count    : this.count,
      subtotal : this.cartSubtotal
    };
  }
});
