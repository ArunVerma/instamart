Instamart.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'storeIndex'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  storeIndex: function () {
    Instamart.stores.fetch();
    var view = new Instamart.Views.StoresIndex({
      collection: Instamart.stores
    });

    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
