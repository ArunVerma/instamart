Instamart.Views.StoreDropdown = Marionette.ItemView.extend({
  template: JST['nav/store_dropdown'],

  className: 'warehouses-container',

  events: {
    'click button.close': 'close',
    'click .warehouse-option': 'close'
  },

  open: function () {
    $('#warehouse-dropdown').addClass('ic-in');
  },

  close: function () {
    $('#warehouse-dropdown').removeClass('ic-in');
  }
})
