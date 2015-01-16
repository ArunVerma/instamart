Instamart.Routers.Store = Backbone.Router.extend({
  routes: {
    '404'                                         : 'oops',
    ''                                            : 'home',
    'help'                                        : 'help',
    'account'                                     : 'account',
    'express'                                     : 'express',
    'checkout'                                    : 'delivery',
    'checkout/payment'                            : 'payment',
    'whole-foods'                                 : 'storeShow',
    'whole-foods/lists'                           : 'lists',
    'whole-foods/favorites'                       : 'favorites',
    'whole-foods/departments/:id'                 : 'departmentShow',
    'whole-foods/departments/:dept_id/aisles/:id' : 'aisleShow'
  },

  initialize: function () {
    // If coming from express page
    $('body').removeClass('landing-page express-landing-page');
  },

  oops: function () {
    var view = new Instamart.Views.Oops;
    $('body').html(view.render().el);
  },

  home: function () {
    // If not signed in, go to landing page
    if (!Instamart.currentUser.isSignedIn()) {
      Backbone.history.navigate('landing', {trigger : true});
    // Else, go to home index
    } else {
      Backbone.history.navigate('whole-foods', {trigger : true});
    }
  },

  account: function () {
    var dept = new Instamart.Models.Department({name: 'Popular'});
    this.renderNav(dept);
    this.renderPanels();

    // Activate active panel
    $('.content-panel').removeClass('active');
    $('.account.content-panel').addClass('active');

    // Update department dropdown
    $('a.department.nav-tab').removeClass('active');

    // Update active nav bar tab
    $('a.nav-tab').removeClass('active-nav');
  },

  // Checkout
  delivery: function () {
    // Render nav
    var dept = new Instamart.Models.Department({name: 'Checkout'});
    this.renderNav(dept);
    this.renderPanels();

    // Update checking out status
    $('body').addClass('checking-out');

    // Update active panel
    $('.content-panel').removeClass('active');
    $('.delivery.content-panel').addClass('active');
  },

  payment: function () {
    // Render nav
    var dept = new Instamart.Models.Department({name: 'Checkout'});
    this.renderNav(dept);
    this.renderPanels();

    // Update checking out status
    $('body').addClass('checking-out');

    // Update active panel
    $('.content-panel').removeClass('active');
    $('.payment.content-panel').addClass('active');
  },

  replacements: function () {
    // Render nav
    var dept = new Instamart.Models.Department({name: 'Checkout'});
    this.renderNav(dept);
    this.renderPanels();

    // Update checking out status
    $('body').addClass('checking-out');

    // Update active panel
    $('.content-panel').removeClass('active');
    $('.replacements.content-panel').addClass('active');
  },

  help: function () {
    var dept = new Instamart.Models.Department({name: 'Choose'});
    this.renderNav(dept);
    this.renderPanels();

    // If coming from checkout
    $('body').removeClass('checking-out');

    // Update active panel
    $('.content-panel').removeClass('active');
    $('.faq.content-panel').addClass('active');
  },

  lists: function () {
    var dept = new Instamart.Models.Department({name: 'Lists & Recipes'});
    this.renderNav(dept);
    this.renderPanels();

    // Update active panel
    $('.content-panel').removeClass('active');
    $('.lists.content-panel').addClass('active');

    // Update department dropdown
    $('a.department.nav-tab').removeClass('active');
    $('a.department.nav-tab.lists').addClass('active');

    // Update active nav bar tab
    $('a.nav-tab').removeClass('active-nav');
    $('a.nav-tab.lists').addClass('active-nav');
  },

  favorites: function () {
    var dept = new Instamart.Models.Department({name: 'Favorites'});
    this.renderNav(dept);
    this.renderPanels();

    // Update active panel
    $('.content-panel').removeClass('active');
    $('.favorites.content-panel').addClass('active');

    // Update department dropdown
    $('a.department.nav-tab').removeClass('active');
    $('a.department.nav-tab.favorites').addClass('active');

    // Update active nav bar tab
    $('a.nav-tab').removeClass('active-nav');
    $('a.nav-tab.favorites').addClass('active-nav');
  },

  express: function () {
    var dept = new Instamart.Models.Department({name: 'Popular'});
    this.renderNav(dept);
    this.renderPanels();

    // Activate active panel
    $('.content-panel').removeClass('active');
    $('.new-subscription.content-panel').addClass('active');
    $('body').addClass('landing-page express-landing-page');

    // Update department dropdown
    $('a.department.nav-tab').removeClass('active');

    // Update active nav bar tab
    $('a.nav-tab').removeClass('active-nav');
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
    var cartSidebarView = new Instamart.Views.CartSidebar({collection : Instamart.cartItems});
    Instamart.cartSidebar.show(cartSidebarView);
  },

  renderPanels: function () {
    // Account
    var accountView = new Instamart.Views.Account({model : Instamart.currentUser});
    accountView.setElement('.account.content-panel').render();
    // Instamart.accountPanel.show(accountView);

    // FAQ
    var faqView = new Instamart.Views.FAQ;
    Instamart.faqPanel.show(faqView);

    // Lists index
    var listsIndexView = new Instamart.Views.ListsIndex;
    Instamart.listsPanel.show(listsIndexView);

    // Favorites
    var favoritesView = new Instamart.Views.Favorites;
    Instamart.favoritesPanel.show(favoritesView);

    // Express
    var expressView = new Instamart.Views.Express;
    expressView.setElement('.new-subscription.content-panel').render();
    // Instamart.expressPanel.show(expressView);

    // Checkout: step one, delivery
    var deliveryView = new Instamart.Views.Delivery;
    Instamart.deliveryPanel.show(deliveryView);

    // Checkout: step two, payment
    var paymentView = new Instamart.Views.Payment;
    Instamart.paymentPanel.show(paymentView);

    // Checkout: step three, replacements
    var replacementsView = new Instamart.Views.Replacements;
    Instamart.replacementsPanel.show(replacementsView);
  },

  // Main content
  storeShow: function () {
    // Require signed in
    if (!Instamart.currentUser.isSignedIn()) {
      Backbone.history.navigate("landing", {trigger : true});
      return;
    }

    // If coming from checkout
    $('body').removeClass('checking-out');
    
    // Items board
    var depts = Instamart.stores.getOrFetch(1).depts();
    var itemsBoard = new Instamart.Views.ItemsBoard({collection : depts});
    Instamart.itemsBoard.show(itemsBoard);

    // Nav
    var dept = new Instamart.Models.Department({name: 'Popular'});
    this.renderNav(dept);
    this.renderPanels();

    // Banner
    var bannerView = new Instamart.Views.Banner;
    Instamart.popularPanel.show(bannerView);

    // Update department dropdown
    $('a.department.nav-tab').removeClass('active');
    $('a.department.nav-tab.popular').addClass('active');

    // Update active nav bar tab
    $('a.nav-tab').removeClass('active-nav');
    $('a.nav-tab.popular').addClass('active-nav');

    // Activate panel
    $('.content-panel').removeClass('active');
    $('.popular.content-panel').addClass('active');
    $('.department.content-panel').addClass('active');
  },

  departmentShow: function (id) {
    // Require signed in
    if (!Instamart.currentUser.isSignedIn()) {
      Backbone.history.navigate("landing", {trigger : true});
      return;
    }

    // Make items board
    var dept = Instamart.departments.getOrFetch(id);
    var aisles = dept.aisles();
    var itemsBoard = new Instamart.Views.ItemsBoard({collection : aisles});
    Instamart.itemsBoard.show(itemsBoard);

    // Nav
    this.renderNav(dept);
    this.renderPanels();

    // Disable banner
    $('.popular.content-panel').removeClass('active');

    // Update nav bar
    $('a.department').removeClass('active');
    $('*[data-department-id="' + dept.id + '"]').addClass('active');

    // Activate panel
    $('.content-panel').removeClass('active');
    $('.department.content-panel').addClass('active');
  },

  aisleShow: function (store_id, dept_id, id) {
    // Require signed in
    if (!Instamart.currentUser.isSignedIn()) {
      Backbone.history.navigate("landing", {trigger : true});
      return;
    }

    // Items board
    var aisle = Instamart.aisles.getOrFetch(id);
    var dept = Instamart.departments.getOrFetch(dept_id);
    var dummy = new Instamart.Collections.Aisles([aisle], {});
    var itemsBoard = new Instamart.Views.ItemsBoard({collection : dummy });

    // Nav
    this.renderNav(dept);
    this.renderPanels();

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
