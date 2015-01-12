Instamart.Views.StoreShow = Backbone.View.extend({

  template: JST['stores/show'],

  events: {
    'click li': 'itemModal'
  },

  itemModal: function (event) {
    event.preventDefault();
    var $tar = $(event.currentTarget);
    var item = new Instamart.Models.Item({ id: $tar.attr('data-item-id') });
    item.fetch({ async: false });
    var view = new Instamart.Views.ItemShow({
      model: item
    });

    this.$el.append(view);
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.model.depts().fetch({ async: false });
  },

  render: function () {
    var content = this.template({
      store: this.model
    });

    this.$el.html(content);
    return this;
  }

});
