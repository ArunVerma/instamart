Instamart.Views.HeaderPrimary = Backbone.View.extend({
  template: JST['header/primary'],

  render: function () {
    var content = this.template({
      dept: this.model
    });
    
    this.$el.html(content);
    return this;
  }
})
