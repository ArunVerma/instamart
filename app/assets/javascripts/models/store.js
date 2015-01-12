Instamart.Models.Store = Backbone.Model.extend({
  urlRoot: 'stores',

  depts: function () {
    if (!this._depts) {
      this._depts = new Instamart.Collections.Departments([], { store: this });
    }

    return this._depts;
  },

  parse: function (response) {
    if (response.depts) {
      this.depts().set(response.depts, { parse: true });
      delete response.depts;
    }

    return response;
  }

});
