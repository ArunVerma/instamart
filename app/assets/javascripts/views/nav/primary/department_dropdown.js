Instamart.Views.DepartmentDropdown = Marionette.ItemView.extend({
  template: JST['nav/department_dropdown'],

  className: 'departments-container',

  events: {
    'click button.close': 'close',
    'click .btn-change-warehouse': 'changeStore',
    'click a.department': 'close'
  },

  initialize: function () {
    if (Instamart.departments.length === 0) {
      Instamart.departments.fetch({ async: true });
    }
    
    this.departments = Instamart.departments;
  },

  open: function () {
    $('#department-dropdown').addClass('ic-in');
  },

  close: function () {
    $('#department-dropdown').removeClass('ic-in');
  },

  changeStore: function () {
    $('#department-dropdown').removeClass('ic-in');
    $('#warehouse-dropdown').addClass('ic-in');
  },

  templateHelpers: function () {
    return {
      departments : Instamart.departments
    }
  }
})
