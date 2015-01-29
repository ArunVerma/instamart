Instamart.Views.PrimaryNav = Marionette.ItemView.extend({
  template: JST['nav/primary'],

  className: "navbar-inner",

  events: {
    'click #select-warehouse-name'     : 'toggleStoreDropdown',
    'click #select-department-name'    : 'toggleDepartmentDropdown',
    'mouseover .dropdown.my-instacart' : 'showUserDropdown',
    'mouseout .dropdown.my-instacart'  : 'closeUserDropdown'
  },

  onShow: function () {
    // Initialize Twitter typeahead search on view show
    var substringMatcher = function(strs) {
      return function findMatches(q, cb) {
        var matches, substrRegex;

        // an array that will be populated with substring matches
        matches = [];

        // regex used to determine if a string contains the substring `q`
        substrRegex = new RegExp(q, 'i');

        // iterate through the pool of strings and for any string that
        // contains the substring `q`, add it to the `matches` array
        $.each(strs, function(i, str) {
          if (substrRegex.test(str)) {
            // the typeahead jQuery plugin expects suggestions to a
            // JavaScript object, refer to typeahead docs for more info
            matches.push({ value: str });
          }
        });

        cb(matches);
      };
    };

    // Search terms
    var items = Instamart.items.pluck('name');
    var aisles = Instamart.aisles.pluck('name');
    var departments = Instamart.departments.pluck('name');
    var keys = items.concat(aisles, departments);

    $('.search-term').typeahead(
      {
        hint: true,
        highlight: true,
        minLength: 1
      },
      {
        name: 'term',
        displayKey: 'value',
        source: substringMatcher(keys)
      }
    );
  },

  showUserDropdown: function () {
    $('.dropdown-menu.user').css({ 'display': 'block' });
  },

  closeUserDropdown: function () {
    $('.dropdown-menu.user').css({ 'display': 'none' });
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
