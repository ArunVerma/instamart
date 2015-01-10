Instamart.Views.ZoneShow = Backbone.View.extend({
  template: ['zones/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      zone: this.model
    });

    this.$el.html(content);
    return this;
  }
})
