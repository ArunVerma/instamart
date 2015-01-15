Instamart.Views.ItemsBoard = Marionette.ItemView.extend({
  onRender: function () {
    this.collection.each(function (model) {
      model.fetch({ async: false });
      if (model.items().length === 0) return;
      header = new Instamart.Views.ItemHeader({ model: model });
      items = new Instamart.Views.ItemsList({ collection: model.items() });
      this.$el.append(header.render().el);
      this.$el.append(items.render().el);
    }.bind(this));
  },

  template: false,

  className: "infinite-scrolling items-board unstyled"
});
