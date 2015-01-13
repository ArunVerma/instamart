Instamart.Views.ItemModal = Backbone.View.extend({
  template: JST['items/modal'],

  events: {
    'click .item-detail-overlay': 'dismiss',
    'click .close' : 'dismiss'
  },

  dismiss: function (event) {
    event.preventDefault();
    this.remove();
  },

  render: function () {
    var content = this.template({ item: this.model });
    this.$el.html(content);
    return this;
  }
});
