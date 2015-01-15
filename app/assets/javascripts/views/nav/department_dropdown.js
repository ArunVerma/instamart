Instamart.Views.DepartmentDropdown = Marionette.ItemView.extend({
  template: JST['nav/department_dropdown'],

  className: 'departments-container',

  events: {
    'click button.close': 'dismiss',
    'click .btn-change-warehouse': 'changeStore',
    'click a.department': 'dismiss'
  },

  dismiss: function () {
    $('#department-dropdown').removeClass('ic-in');
  },

  changeStore: function () {
    $('#warehouse-dropdown').toggleClass('ic-in');
    $('#department-dropdown').toggleClass('ic-in');
  }
})
