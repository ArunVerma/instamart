Instamart.Views.StoresIndex = Backbone.View.extend({

  template: JST['stores/index'],

  render: function () {
    var content = this.template({
      stores: this.collection
    });

    this.$el.html(content);
    return this;
  }

});
