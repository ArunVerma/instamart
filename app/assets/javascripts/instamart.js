window.Instamart = new Backbone.Marionette.Application();

// Namespace
Instamart.Models      = {};
Instamart.Collections = {};
Instamart.Routers     = {};
Instamart.Views       = {};

Instamart.on("start", function () {

  // Models/Collections
  Instamart.currentUser = new Instamart.Models.CurrentUser();
  Instamart.users       = new Instamart.Collections.Users;
  Instamart.carts       = new Instamart.Collections.Carts;
  Instamart.cartItems   = new Instamart.Collections.CartItems;
  Instamart.zones       = new Instamart.Collections.Zones;
  Instamart.stores      = new Instamart.Collections.Stores([], {});
  Instamart.departments = new Instamart.Collections.Departments([], {});
  Instamart.aisles      = new Instamart.Collections.Aisles([], {});
  Instamart.items       = new Instamart.Collections.Items([], {});

  // Sync
  Instamart.currentUser.fetch( {async : false});
  Instamart.users.fetch(       {async : false});
  Instamart.carts.fetch(       {async : false});
  Instamart.cartItems.fetch(   {async : false});
  Instamart.zones.fetch(       {async : false});
  Instamart.stores.fetch(      {async : false});
  Instamart.departments.fetch( {async : false});
  Instamart.aisles.fetch(      {async : false});
  Instamart.items.fetch(       {async : false});

  // Add regions
  if (Instamart.currentUser.isSignedIn()) {
    var indexView = new Instamart.Views.Index;
    indexView.setElement($('body')).render();

    Instamart.addRegions({
      primaryNav         : ".navbar.primary-navbar.ic-collapsible-nav",
      secondaryNav       : ".navbar.secondary-navbar.hide-on-checkout",
      departmentDropdown : "#department-dropdown",
      storeDropdown      : "#warehouse-dropdown",
      cartSidebar        : "#cart-sidebar",
      itemsBoard         : ".items-board-container",
      popularPanel       : ".popular.content-panel",
      aislePanel         : ".span10",
      faqPanel           : ".faq.content-panel",
      listsPanel         : ".lists.content-panel",
      favoritesPanel     : ".favorites.content-panel",
      deliveryPanel      : ".delivery.content-panel",
      paymentPanel       : ".payment.content-panel",
      replacementsPanel  : ".replacements.content-panel",
      expressPanel       : ".new-subscription.content-panel"
    });
  }

  // Routers
  Instamart.sessionRouter = new Instamart.Routers.Session({ $rootEl: $('body') });
  Instamart.storeRouter   = new Instamart.Routers.Store({   $rootEl: $('body') });

  // Serve 404 if router not found
  if (!Backbone.History.started) {
    if (!Backbone.history.start()) Backbone.history.navigate('404', {trigger : true});
  }

  // Twitter typeahead search
  Instamart.storeRouter.on('route', function (router, params) {
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

    $('.search-term').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'term',
      displayKey: 'value',
      source: substringMatcher(keys)
    });
  });
});
