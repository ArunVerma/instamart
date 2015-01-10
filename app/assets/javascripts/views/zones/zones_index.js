Instamart.Views.ZonesIndex = Backbone.View.extend({

  template: JST['zones/index'],

  events: {
    'click .delete': 'destroyMe'
  },

  initialize: function () {
    this.listenTo(this.collection, 'add remove reset change', this.render);
  },

  destroyMe: function (event) {
    var $tar = $(event.currentTarget);
    var me = this.collection.get($tar.attr('data-id'));
    me.destroy();
  },

  render: function () {
    var content = this.template({
      zones: this.collection
    });

    this.$el.html(content);
    return this;
  }

});
