Instamart.Views.AisleShow = Backbone.CompositeView.extend({
  template: JST['aisles/show'],

  className: 'container-fluid cart-minimized',

  addItem: function (item) {
    var view = new Instamart.Views.ItemShow({ model: item });
    this.addSubview('.items-board.unstyled', view);
  },

  renderItems: function () {
    this.model.items().each(this.addItem.bind(this));
  },

  render: function () {
    var content = this.template({ aisle: this.model });
    this.$el.html(content);
    this.renderItems();
    return this;
  }
});
