Instamart.Collections.Carts = Backbone.Collection.extend({

  model: Instamart.Models.Cart,
  url: 'carts',

  getOrFetch: function (id) {
    var item = this.get(id);

    if (!item) {
      item = new Instamart.Models.Cart({ id: id });
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
