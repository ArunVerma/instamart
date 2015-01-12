Instamart.Models.Department = Backbone.Model.extend({
  urlRoot: 'departments',

  aisles: function () {
    if (!this._aisles) {
      this._aisles = new Instamart.Collections.Aisles([], { dept: this });
    }

    return this._aisles;
  },

  items: function () {
    if (!this._items) {
      this._items = new Instamart.Collections.Items([], { dept: this });
    }

    return this._items;
  },

  parse: function (response) {
    if (response.aisles) {
      this.aisles().set(response.aisles, { parse: true });
      delete response.aisles;
    }

    if (response.items) {
      this.items().set(response.items, { parse: true });
      delete response.items;
    }

    return response;
  }

});
