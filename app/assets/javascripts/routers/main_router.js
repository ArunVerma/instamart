Instamart.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'zoneIndex',
    'zones/new': 'zoneNew',
    'zones/:id': 'zoneShow',
    'zones/:id/edit': 'zoneEdit',
    'zones/:zone_id/stores': 'storeIndex',
    'zones/:zone_id/stores/new': 'storeNew',
    'zones/:zone_id/stores/:id': 'storeShow',
    'zones/:zone_id/stores/:id/edit': 'storeEdit',
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  // Zone
  zoneIndex: function () {
    Instamart.zones.fetch();
    var view = new Instamart.Views.ZonesIndex({
      collection: Instamart.zones
    });

    this._swapView(view);
  },

  zoneNew: function () {
    var zone = new Instamart.Models.Zone();
    var view = new Instamart.Views.ZoneForm({
      model: zone,
      collection: Instamart.zones
    });

    this._swapView(view);
  },

  zoneShow: function (id) {
    var zone = Instamart.zones.getOrFetch(id);
    var view = new Instamart.Views.ZoneShow({
      model: zone
    });

    this._swapView(view);
  },

  zoneEdit: function (id) {
    var zone = Instamart.zones.getOrFetch(id);
    var view = new Instamart.Views.ZoneForm({
      model: zone,
      collection: Instamart.zones
    });

    this._swapView(view);
  },

  // Store
  storeIndex: function () {
    Instamart.stores.fetch();
    var view = new Instamart.Views.StoresIndex({
      collection: Instamart.stores
    });

    this._swapView(view);
  },

  storeNew: function (zone_id) {
    var store = new Instamart.Models.Store({ zone_id: zone_id});
    var view = new Instamart.Views.StoreForm({
      model: store,
      collection: Instamart.stores
    });

    this._swapView(view);
  },

  storeShow: function (id) {
    var store = Instamart.stores.getOrFetch(id);
    var view = new Instamart.Views.StoreShow({
      model: store
    });

    this._swapView(view);
  },

  storeEdit: function (id) {
    var store = Instamart.stores.getOrFetch(id);
    var view = new Instamart.Views.StoreForm({
      model: store,
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
