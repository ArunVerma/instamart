Instamart.Collections.CartItems = Backbone.Collection.extend({

  model: Instamart.Models.CartItem,
  url: "cart_items",

  getOrFetch: function (id) {
    var item = this.get(id);

    if (!item) {
      item = new Instamart.Models.CartItem({ id: id });
      item.fetch({
        success: function () {
          this.add(item);
        }.bind(this)
      });
    } else {
      item.fetch();
    }

    return item;
  }
});
