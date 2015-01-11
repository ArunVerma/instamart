Instamart.Views.StoreShow = Backbone.View.extend({
  template: ['stores/show'],

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
