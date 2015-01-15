Instamart.Routers.Store = Backbone.Router.extend({
  routes: {
    '': 'homeRouter',
    'stores/:id': 'storeShow',
    'stores/:store_id/departments/:id': 'departmentShow',
    'stores/:store_id/departments/:dept_id/aisles/:id': 'aisleShow'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  homeRouter: function () {
    console.log(Instamart.currentUser.isSignedIn());
    if (!Instamart.currentUser.isSignedIn()) {
      Backbone.history.navigate("landing", { trigger: true });
    } else {
      Backbone.history.navigate("stores/1", { trigger: true });
    }
  },

  showNav: function (dept) {
    // Primary Nav
    var primaryNavView = new Instamart.Views.PrimaryNav({ model: dept });
    Instamart.primaryNav.show(primaryNavView);

    // Secondary Nav
    var secondaryNavView = new Instamart.Views.SecondaryNav({ model: dept });
    Instamart.secondaryNav.show(secondaryNavView);

    // Store dropdown
    var storeDropdownView = new Instamart.Views.StoreDropdown;
    Instamart.storeDropdown.show(storeDropdownView);

    // Department dropdown
    var departmentDropdownView = new Instamart.Views.DepartmentDropdown;
    Instamart.departmentDropdown.show(departmentDropdownView);
  },

  // Main content
  storeShow: function (id) {
    var depts = Instamart.stores.getOrFetch(id).depts();
    var itemsBoard = new Instamart.Views.ItemsBoard({ collection: depts });
    Instamart.itemsBoard.show(itemsBoard);
    $('.department.content-panel').toggleClass('active');

    // Nav
    var dept = new Instamart.Models.Department({name: 'Popular'});
    this.showNav(dept);

    // Banner
    var bannerView = new Instamart.Views.Banner;
    Instamart.popularPanel.show(bannerView);
    $('.popular.content-panel').toggleClass('active');
  },

  departmentShow: function (id) {
    var dept = Instamart.departments.getOrFetch(id);
    var aisles = dept.aisles();
    var itemsBoard = new Instamart.Views.ItemsBoard({ collection: aisles });
    Instamart.itemsBoard.show(itemsBoard);
    $('.department.content-panel').toggleClass('active');

    // Nav
    this.showNav(dept);
  },

  aisleShow: function (id) {
    var aisle = Instamart.aisles.getOrFetch(id);
    var dummy = new Instamart.Collections.Aisles([aisle], {});
    var itemsBoard = new Instamart.Views.ItemsBoard({ collection: dummy });
    var facets = new Instamart.Views.AisleFacets;
    $('.aisle.row-fluid').prepend(facets.render().el);
    Instamart.aislePanel.show(itemsBoard);
    $('.aisle.content-panel').toggleClass('active');
  }

});
