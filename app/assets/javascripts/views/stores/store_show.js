Instamart.Views.StoreShow = Backbone.View.extend({

  template: JST['stores/show'],

  className: 'container-fluid cart-minimized',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.depts = this.model.depts();
  },

  addDepartment: function (department) {
    var view = new Instamart.Views.DepartmentShow({ model: department });
    this.addSubview('.infinite-scrolling.items-board.unstyled', view);
  },

  renderDepartments: function () {
    this.depts.each(this.addDepartment.bind(this));
  },

  render: function () {
    var content = this.template({ store: this.model });
    this.$el.html(content);
    this.renderDepartments();
    return this;
  }
});
