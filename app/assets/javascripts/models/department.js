Instamart.Models.Department = Backbone.Model.extend({
  urlRoot: '/departments',

  aisles: function () {
    if (!this._aisles) {
      this._aisles = new Instamart.Collections.Aisles([], { dept: this });
    }

    return this._aisles;
  },

  parse: function (response) {
    if (response.aisles) {
      this.aisles().set(response.aisles, { parse: true });
      delete response.aisles;
    }

    return response;
  }

});
