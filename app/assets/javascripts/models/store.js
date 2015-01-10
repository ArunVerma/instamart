Instamart.Models.Store = Backbone.Model.extend({
  urlRoot: '/stores',

  cards: function () {
    if (!this._departments) {
      this._departments = new Instamart.Collections.Departments([], { store: this });
    }

    return this._departments;
  },

  parse: function (response) {
    if (response.departments) {
      this.departments().set(response.departments, { parse: true });
      delete response.departments;
    }

    return response;
  }

});
