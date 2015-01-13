Instamart.Views.ItemsList = Backbone.CompositeView.extend({
  template: JST['items/list'],

  initialize: function () {
    this.collection.each(this.addItemView.bind(this));
  },

  addItemView: function (item) {
    var itemView = new Instamart.Views.ItemShow({ model: item });

    this.addSubview('.items-board.unstyled', itemView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
})
