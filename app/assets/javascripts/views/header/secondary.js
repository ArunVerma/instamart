Instamart.Views.HeaderSecondary = Backbone.View.extend({
  template: JST['header/secondary'],

  initialize: function (options) {
    this.pageType = options.pageType;
  },

  render: function () {
    var content = this.template({
      dept: this.model,
      pageType: this.pageType
    });

    this.$el.html(content);
    return this;
  }
})
