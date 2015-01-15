window.Instamart = new Backbone.Marionette.Application();

Instamart.Models = {};
Instamart.Collections = {};
Instamart.Routers = {};
Instamart.Views = {};

Instamart.addRegions({
  primaryNav: ".navbar.primary-navbar.ic-collapsible-nav",
  secondaryNav: ".navbar.secondary-navbar.hide-on-checkout",
  popularPanel: ".popular.content-panel",
  departmentDropdown: "#department-dropdown",
  storeDropdown: "#warehouse-dropdown",
  itemsBoard: ".items-board-container",
  aislePanel: ".span10",
  cartSidebar: "#cart-sidebar"
});

Instamart.on("start", function () {
  Instamart.storeRouter = new Instamart.Routers.Store({ $rootEl: $('body') });
  Instamart.sessionRouter = new Instamart.Routers.Session({ $rootEl: $('body') });

  Instamart.currentUser = new Instamart.Models.CurrentUser();
  Instamart.users = new Instamart.Collections.Users;
  Instamart.zones = new Instamart.Collections.Zones;
  Instamart.stores = new Instamart.Collections.Stores([], {});
  Instamart.departments = new Instamart.Collections.Departments([], {});
  Instamart.aisles = new Instamart.Collections.Aisles([], {});
  Instamart.items = new Instamart.Collections.Items([], {});

  Instamart.currentUser.fetch({ async: false });
  Instamart.users.fetch({ async: false });
  Instamart.zones.fetch({ async: false });
  Instamart.stores.fetch({ async: false });
  Instamart.departments.fetch({ async: false });
  Instamart.aisles.fetch({ async: false });
  Instamart.items.fetch({ async: false });
  Backbone.history.start();
});
