Instamart.Views.HeaderSecondary = Backbone.View.extend({
  template: ['header/secondary'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})
