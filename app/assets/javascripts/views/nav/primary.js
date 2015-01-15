Instamart.Views.PrimaryNav = Marionette.ItemView.extend({
  template: JST['nav/primary'],

  className: "navbar-inner",

  events: {
    'click #select-warehouse-name': 'toggleStoreDropdown',
    'click #select-department-name': 'toggleDepartmentDropdown'
  },

  toggleStoreDropdown: function () {
    $('#warehouse-dropdown').toggleClass('ic-in');
  },

  toggleDepartmentDropdown: function () {
    $('#department-dropdown').toggleClass('ic-in');
  }

})
