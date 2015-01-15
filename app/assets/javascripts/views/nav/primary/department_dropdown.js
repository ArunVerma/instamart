Instamart.Views.DepartmentDropdown = Marionette.ItemView.extend({
  template: JST['nav/department_dropdown'],

  className: 'departments-container',

  events: {
    'click button.close': 'close',
    'click .btn-change-warehouse': 'changeStore',
    'click a.department': 'close'
  },

  open: function () {
    $('#department-dropdown').addClass('ic-in');
  },

  close: function () {
    $('#department-dropdown').removeClass('ic-in');
  },

  changeStore: function () {
    $('#warehouse-dropdown').addClass('ic-in');
    $('#department-dropdown').removeClass('ic-in');
  }
})
