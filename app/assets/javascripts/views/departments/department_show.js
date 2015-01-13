Instamart.Views.DepartmentShow = Backbone.View.extend({
  template: JST['departments/show'],

  className: "container-fluid cart-minimized",

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      dept: this.model
    });

    this.$el.html(content);
    return this;
  }
});
