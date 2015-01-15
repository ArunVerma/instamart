Instamart.Views.StoreDropdown = Marionette.ItemView.extend({
  template: JST['nav/store_dropdown'],

  className: 'warehouses-container',

  events: {
    'click button.close': 'dismiss',
    'click a': 'dismiss'
  },

  dismissStoreDropdown: function () {
    $('#warehouse-dropdown').removeClass('ic-in');
  }
})
