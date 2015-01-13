Instamart.Views.DepartmentIndex = Backbone.View.extend({
  template: JST['departments/index'],

  className: "infinite-scrolling items-board unstyled",

  initialize: function (options) {
    this.items = this.model.items();
    this.store = options.store
  },

  render: function () {
    var content = this.template({ store: this.store, dept: this.model });
    this.$el.html(content);
    this.items.each(function (item) {
      var view = new Instamart.Views.ItemShow({ model: item });
      this.$el.find('.items-list').append(view.render().$el);
    }.bind(this));
    return this;
  }
})
