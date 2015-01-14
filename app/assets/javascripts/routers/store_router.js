Instamart.Routers.Store = Backbone.Router.extend({
  routes: {
    'stores/:store_id': 'storeShow',
    'stores/:store_id/departments/:dept_id': 'departmentShow',
    'stores/:store_id/departments/:dept_id/aisles/:aisle_id': 'aisleShow'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  // Headers
  headerPrimary: function (options) {
    var view = new Instamart.Views.HeaderPrimary({
      model: options.dept
    });

    this._swapPrimaryHeader(view);
  },

  headerSecondary: function (options) {
    var view = new Instamart.Views.HeaderSecondary({
      model: options.dept,
      pageType: options.pageType
    });

    this._swapSecondaryHeader(view);
  },

  _showHeader: function (options) {
    this.headerPrimary(options);
    this.headerSecondary(options);
  },

  // Main content
  aisleShow: function (store_id, dept_id, aisle_id) {
    var aisle = Instamart.aisles.getOrFetch(aisle_id);
    var view = new Instamart.Views.AisleShow({ model: aisle });
    this._swapMainContent(view);
    this._showHeader({ dept: Instamart.departments.getOrFetch(dept_id), pageType: 'list' });
  },

  aislesList: function (store_id, dept_id) {
    var aisles = Instamart.departments.getOrFetch(dept_id).aisles();
    var view = new Instamart.Views.AislesList({ collection: aisles });
  },

  departmentsList: function (store_id) {

  },

  // Swap view helpers
  _swapMainContent: function (view) {
    this._mainContent && this._mainContent.remove();
    this._mainContent = view;
    this.$rootEl.find('.outside-container').html(view.render().$el);
  },

  _swapPrimaryHeader: function (view) {
    this._primaryHeader && this._primaryHeader.remove();
    this._primaryHeader = view;
    this.$rootEl.find('.primary-navbar').html(view.render().$el);
  },

  _swapSecondaryHeader: function (view) {
    this._secondaryHeader && this._secondaryHeader.remove();
    this._secondaryHeader = view;
    this.$rootEl.find('.secondary-navbar').html(view.render().$el);
  }

});
