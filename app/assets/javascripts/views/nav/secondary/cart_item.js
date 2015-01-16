Instamart.Views.CartItem = Marionette.ItemView.extend({
  template: JST['items/cart_item'],

  tagName: 'tr',

  attributes: function () {
    return {
      "data-item-id": this.model.get('item_id')
    };
  },

  initialize: function () {
    this.item  = Instamart.items.findWhere({ id: this.model.get('item_id') });
    this.price = parseFloat(this.item.get('price')).toFixed(2);
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
