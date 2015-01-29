Instamart.Views.CartItem = Marionette.ItemView.extend({
  template: JST['items/cart_item'],

  tagName: 'tr',

  events: {
    'click a.qty-inc'     : 'addToCart',
    'click a.qty-dec'     : 'removeFromCart',
    'click a.remove-item' : 'removeAllFromCart'
  },

  addToCart: function (e) {
    Instamart.currentUser.addToCart(this.item.id);
  },

  removeFromCart: function (e) {
    Instamart.currentUser.removeFromCart(this.item.id);
  },

  removeAllFromCart: function (e) {
    Instamart.currentUser.removeAllFromCart(this.item.id);
  },

  attributes: function () {
    return {
      "data-item-id": this.model.get('item_id')
    };
  },

  initialize: function () {
    this.listenTo(Instamart.cartItems, 'remove add change', this.render);
    this.item  = Instamart.items.findWhere({ id: this.model.get('item_id') });
    this.price = parseFloat(this.item.get('price')).toFixed(2);
  },

  onBeforeRender: function () {
    this.item  = Instamart.items.findWhere({ id: this.model.get('item_id') });
    this.price = parseFloat(this.item.get('price')).toFixed(2);
  },

  onRender: function () {
    if (+this.model.get('qty') > 1) {
      $('tr[data-item-id=' + this.item.id + '] a.qty-dec').removeClass('qty-disabled');
    } else {
      $('tr[data-item-id=' + this.item.id + '] a.qty-dec').addClass('qty-disabled');
    }
  },

  templateHelpers: function () {
    return {
      name    : this.item.get('name'),
      size    : this.item.get('size'),
      price   : this.price,
      qty     : +this.model.get('qty'),
      img_url : this.item.get('img_url')
    };
  }
})
