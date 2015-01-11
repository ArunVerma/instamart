Instamart.Collections.Aisles = Backbone.Collection.extend({

  model: Instamart.Models.Aisle,
  url: '/aisles',

  initialize: function (models, options) {
    this.dept = options.dept;
  },

  getOrFetch: function (id) {
    var aisle = this.get(id);

    if (!aisle) {
      aisle = new Instamart.Models.Aisle({ id: id });
      aisle.fetch({
        success: function () {
          this.add(aisle);
        }.bind(this)
      });
    } else {
      aisle.fetch();
    }

    return aisle;
  }

});
