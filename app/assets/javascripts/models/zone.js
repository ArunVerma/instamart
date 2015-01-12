Instamart.Models.Zone = Backbone.Model.extend({
  urlRoot: 'zones',

  stores: function () {
    if (!this._stores) {
      this._stores = new Instamart.Collections.Stores([], { zone: this });
    }

    return this._stores;
  },

  parse: function (response) {
    if (response.stores) {
      this.stores().set(response.stores, { parse: true });
      delete response.stores;
    }

    return response;
  }

});
