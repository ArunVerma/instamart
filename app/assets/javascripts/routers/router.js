Instamart.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'zones': 'zoneIndex',
    'zones/new': 'zoneNew',
    'zones/:id': 'zoneShow',
    'zones/:id/edit': 'zoneEdit',
    'zones/:zone_id/stores': 'storeIndex',
    'zones/:zone_id/stores/new': 'storeNew',
    'zones/:zone_id/stores/:id': 'storeShow',
    'zones/:zone_id/stores/:id/edit': 'storeEdit',
    'zones/:zone_id/stores/:store_id/departments': 'departmentIndex',
    'zones/:zone_id/stores/:store_id/departments/new': 'departmentNew',
    'zones/:zone_id/stores/:store_id/departments/:id': 'departmentShow',
    'zones/:zone_id/stores/:store_id/departments/:id/edit': 'departmentEdit',
    'zones/:zone_id/stores/:store_id/departments/:dept_id/aisles': 'aisleIndex',
    'zones/:zone_id/stores/:store_id/departments/:dept_id/aisles/new': 'aisleNew',
    'zones/:zone_id/stores/:store_id/departments/:dept_id/aisles/:id': 'aisleShow',
    'zones/:zone_id/stores/:store_id/departments/:dept_id/aisles/:id/edit': 'aisleEdit',
    'zones/:zone_id/stores/:store_id/departments/:dept_id/aisles/:aisle_id/items': 'itemIndex',
    'zones/:zone_id/stores/:store_id/departments/:dept_id/aisles/:aisle_id/items/new': 'itemNew',
    'zones/:zone_id/stores/:store_id/departments/:dept_id/aisles/:aisle_id/items/:id': 'itemShow',
    'zones/:zone_id/stores/:store_id/departments/:dept_id/aisles/:aisle_id/items/:id/edit': 'itemEdit'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  home: function () {
    Backbone.history.navigate('zones/1/stores/1', { trigger: true });
  },

  // Zone
  zoneIndex: function () {
    Instamart.zones.fetch({ async: false });
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
    Instamart.stores.fetch({ async: false });
    var view = new Instamart.Views.StoresIndex({
      collection: Instamart.stores
    });

    this._swapView(view);
  },

  storeNew: function (zone_id) {
    var store = new Instamart.Models.Store({ zone_id: zone_id });
    var view = new Instamart.Views.StoreForm({
      model: store,
      collection: Instamart.stores
    });

    this._swapView(view);
  },

  storeShow: function (zone_id, id) {
    var zone = Instamart.zones.getOrFetch(zone_id);
    var store = zone.stores().getOrFetch(id);
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

  // Department
  departmentIndex: function () {
    Instamart.departments.fetch();
    var view = new Instamart.Views.DepartmentsIndex({
      collection: Instamart.departments
    });

    this._swapView(view);
  },

  departmentNew: function (store_id) {
    var department = new Instamart.Models.Department({ store_id: store_id });
    var view = new Instamart.Views.DepartmentForm({
      model: department,
      collection: Instamart.departments
    });

    this._swapView(view);
  },

  departmentShow: function (id) {
    var department = Instamart.departments.getOrFetch(id);
    var view = new Instamart.Views.DepartmentShow({
      model: department
    });

    this._swapView(view);
  },

  departmentEdit: function (id) {
    var department = Instamart.departments.getOrFetch(id);
    var view = new Instamart.Views.DepartmentForm({
      model: department,
      collection: Instamart.departments
    });

    this._swapView(view);
  },

  // Aisle
  aisleIndex: function () {
    Instamart.aisles.fetch();
    var view = new Instamart.Views.AislesIndex({
      collection: Instamart.aisles
    });

    this._swapView(view);
  },

  aisleNew: function (dept_id) {
    var aisle = new Instamart.Models.Aisle({ dept_id: dept_id });
    var view = new Instamart.Views.AisleForm({
      model: aisle,
      collection: Instamart.aisles
    });

    this._swapView(view);
  },

  aisleShow: function (id) {
    var aisle = Instamart.aisles.getOrFetch(id);
    var view = new Instamart.Views.AisleShow({
      model: aisle
    });

    this._swapView(view);
  },

  aisleEdit: function (id) {
    var aisle = Instamart.aisles.getOrFetch(id);
    var view = new Instamart.Views.AisleForm({
      model: aisle,
      collection: Instamart.aisles
    });

    this._swapView(view);
  },

  // Item
  itemIndex: function () {
    Instamart.items.fetch();
    var view = new Instamart.Views.ItemsIndex({
      collection: Instamart.items
    });

    this._swapView(view);
  },

  itemNew: function (aisle_id) {
    var item = new Instamart.Models.Item({ aisle_id: aisle_id });
    var view = new Instamart.Views.ItemForm({
      model: item,
      collection: Instamart.items
    });

    this._swapView(view);
  },

  itemShow: function (id) {
    var item = Instamart.items.getOrFetch(id);
    var view = new Instamart.Views.ItemShow({
      model: item
    });

    this._swapView(view);
  },

  itemEdit: function (id) {
    var item = Instamart.items.getOrFetch(id);
    var view = new Instamart.Views.ItemForm({
      model: item,
      collection: Instamart.items
    });

    this._swapView(view);
  },

  // Swap view
  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
