Instamart.Collections.Departments = Backbone.Collection.extend({

  model: Instamart.Models.Department,
  url: '/departments',

  initialize: function (models, options) {
    this.store = options.store;
  },

  getOrFetch: function (id) {
    var dept = this.get(id);

    if (!dept) {
      dept = new Instamart.Models.Department({ id: id });
      dept.fetch({
        success: function () {
          this.add(dept);
        }.bind(this)
      });
    } else {
      dept.fetch();
    }

    return dept;
  }

});
