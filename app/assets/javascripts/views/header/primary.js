Instamart.Views.HeaderPrimary = Backbone.View.extend({
  template: ['header/primary'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})
