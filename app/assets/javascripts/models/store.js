Instamart.Models.Store = Backbone.Model.extend({
  urlRoot: 'stores',

  depts: function () {
    if (!this._depts) {
      this._depts = new Instamart.Collections.Departments([], { store: this });
    }

    return this._depts;
  },

  parse: function (response) {
    if (response.departments) {
      this.depts().set(response.departments, { parse: true });
      delete response.departments;
    }

    return response;
  }

});
