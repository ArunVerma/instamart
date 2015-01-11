Instamart.Views.ItemShow = Backbone.View.extend({
  template: ['items/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      model: this.model
    });

    this.$el.html(content);
    return this;
  }
});
