Instamart.Views.AislesList = Backbone.CompositeView.extend({
  template: JST['aisles/list'],

  initialize: function () {
    this.collection.each(this.addAisleView.bind(this));
  },

  addAisleView: function (aisle) {
    var aisleView = new Instamart.Views.AisleShow({
      model: aisle
    });

    this.addSubview('.infinite-scrolling.items-board.unstyled', aisleView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
})
