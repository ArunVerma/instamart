Instamart.Views.SecondaryNav = Marionette.ItemView.extend({
  template: JST['nav/secondary'],

  className: 'navbar-inner',

  id: 'sub-nav-wrapper',

  events: {
    'click #cart-in-nav': 'toggleCartSidebar'
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

  templateHelpers: function () {
    return {
      dept: this.model
    };
  }
});
