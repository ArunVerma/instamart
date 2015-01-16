Instamart.Views.PrimaryNav = Marionette.ItemView.extend({
  template: JST['nav/primary'],

  className: "navbar-inner",

  events: {
    'click #select-warehouse-name': 'toggleStoreDropdown',
    'click #select-department-name': 'toggleDepartmentDropdown',
    'mouseover .dropdown.my-instacart': 'showUserDropdown',
    'mouseout .dropdown.my-instacart': 'closeUserDropdown'
  },

  searchBar: function () {
    $('#store-search').hideseek({ highlight: true });
  },

  showUserDropdown: function () {
    $('.dropdown-menu').css({ 'display': 'block' });
  },

  closeUserDropdown: function () {
    $('.dropdown-menu').css({ 'display': 'none' });
  },

  toggleStoreDropdown: function () {
    $('#department-dropdown').removeClass('ic-in');
    $('#warehouse-dropdown').toggleClass('ic-in');
  },

  toggleDepartmentDropdown: function () {
    $('#warehouse-dropdown').removeClass('ic-in');
    $('#department-dropdown').toggleClass('ic-in');
  },

  templateHelpers: function () {
    return {
      fname: Instamart.currentUser.attributes.fname,
      department_name: this.model.get('name')
    }
  }
})
