Instamart.Views.PrimaryNav = Marionette.ItemView.extend({
  template: JST['nav/primary'],

  className: "navbar-inner",

  events: {
    'click #select-warehouse-name': 'toggleStoreDropdown',
    'click #select-department-name': 'toggleDepartmentDropdown',
    'mouseover .dropdown.my-instacart': 'showUserDropdown',
    'mouseout .dropdown.my-instacart': 'closeUserDropdown'
  },

  showUserDropdown: function () {
    $('.dropdown-menu').css({ 'display': 'block' });
  },

  closeUserDropdown: function () {
    $('.dropdown-menu').css({ 'display': 'none' });
  },

  toggleStoreDropdown: function () {
    $('#warehouse-dropdown').toggleClass('ic-in');
  },

  toggleDepartmentDropdown: function () {
    $('#department-dropdown').toggleClass('ic-in');
  },

  templateHelpers: function () {
    return {
      fname: Instamart.currentUser.attributes.fname,
      department_name: this.model.get('name')
    }
  }
})
