Instamart.Collections.Items = Backbone.Collection.extend({

  model: Instamart.Models.Item,
  url: '/items',

  initialize: function (models, options) {
    this.aisle = options.aisle;
  },

  getOrFetch: function (id) {
    var item = this.get(id);

    if (!item) {
      item = new Instamart.Models.Aisle({ id: id });
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
