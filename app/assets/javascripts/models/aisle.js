Instamart.Models.Aisle = Backbone.Model.extend({
  urlRoot: '/aisles',

  items: function () {
    if (!this._items) {
      this._items = new Instamart.Collections.Items([], { aisle: this });
    }

    return this._items;
  },

  parse: function (response) {
    if (response.items) {
      this.items().set(response.items, { parse: true });
      delete response.items;
    }

    return response;
  }

});
