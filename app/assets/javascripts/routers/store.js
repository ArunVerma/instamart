Instamart.Routers.Store = Backbone.Router.extend({
  routes: {
    '': 'root',
    'stores/:id': 'storeShow',
    'stores/:store_id/departments/:id': 'departmentShow',
    'stores/:store_id/departments/:dept_id/aisles/:id': 'aisleShow'
  },

  root: function () {
    // If not signed in, go to landing page
    if (!Instamart.currentUser.isSignedIn()) {
      Backbone.history.navigate("landing", { trigger: true });
    // Else, go to home index
    } else {
      var indexView = new Instamart.Views.Index;
      indexView.setElement($('body')).render();
      this.assignRegions();
      this.storeShow(1);
    }
  },

  renderNav: function (dept) {
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

    // Cart sidebar
    var cartSidebarView = new Instamart.Views.CartSidebar;
    Instamart.cartSidebar.show(cartSidebarView);
  },

  assignRegions: function () {
    Instamart.addRegions({
      primaryNav:         ".navbar.primary-navbar.ic-collapsible-nav",
      secondaryNav:       ".navbar.secondary-navbar.hide-on-checkout",
      popularPanel:       ".popular.content-panel",
      departmentDropdown: "#department-dropdown",
      storeDropdown:      "#warehouse-dropdown",
      itemsBoard:         ".items-board-container",
      aislePanel:         ".span10",
      cartSidebar:        "#cart-sidebar"
    });
  },

  // Main content
  storeShow: function (id) {
    // Require signed in
    if (!Instamart.currentUser.isSignedIn()) {
      Backbone.history.navigate("landing", { trigger: true });
      return;
    }

    // Items board
    var depts = Instamart.stores.getOrFetch(id).depts();
    var itemsBoard = new Instamart.Views.ItemsBoard({ collection: depts });
    Instamart.itemsBoard.show(itemsBoard);
    $('.department.content-panel').addClass('active');

    // Nav
    var dept = new Instamart.Models.Department({name: 'Popular'});
    this.renderNav(dept);

    // Banner
    var bannerView = new Instamart.Views.Banner;
    Instamart.popularPanel.show(bannerView);
    $('.popular.content-panel').addClass('active');
    $('.popular.content-panel').addClass('active');
  },

  departmentShow: function (store_id, id) {
    // Require signed in
    if (!Instamart.currentUser.isSignedIn()) {
      Backbone.history.navigate("landing", { trigger: true });
      return;
    }

    // Items board
    var dept = Instamart.departments.getOrFetch(id);
    var aisles = dept.aisles();
    var itemsBoard = new Instamart.Views.ItemsBoard({ collection: aisles });
    Instamart.itemsBoard.show(itemsBoard);
    $('.department.content-panel').addClass('active');

    // Nav
    this.renderNav(dept);

    // Disable banner
    $('.popular.content-panel').removeClass('active');
  },

  aisleShow: function (store_id, dept_id, id) {
    // Require signed in
    if (!Instamart.currentUser.isSignedIn()) {
      Backbone.history.navigate("landing", { trigger: true });
      return;
    }

    // Items board
    var aisle = Instamart.aisles.getOrFetch(id);
    var dept = Instamart.departments.getOrFetch(dept_id);
    var dummy = new Instamart.Collections.Aisles([aisle], {});
    var itemsBoard = new Instamart.Views.ItemsBoard({ collection: dummy });
    // Nav
    this.renderNav(dept);

    // Facets sidebar
    var facets = new Instamart.Views.AisleFacets;
    debugger;
    $('.aisle.row-fluid').prepend(facets.render().el);
    Instamart.aislePanel.show(itemsBoard);
    $('.aisle.content-panel').addClass('active');

    // Disable banner
    $('.popular.content-panel').removeClass('active');
  }

});
