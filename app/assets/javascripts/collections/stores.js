Instamart.Collections.Stores = Backbone.Collection.extend({

  model: Instamart.Models.Store,
  url: 'stores',

  initialize: function (models, options) {
    this.zone = options.zone;
  },

  getOrFetch: function (id) {
    var store = this.get(id);

    if (!store) {
      store = new Instamart.Models.Store({id : id});
      store.fetch({
        success: function () {
          this.add(store);
        }.bind(this)
      });
    } else {
      store.fetch();
    }

    return store;
  }

});
