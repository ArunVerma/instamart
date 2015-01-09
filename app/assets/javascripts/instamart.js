window.Instamart = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Instamart.router = new Instamart.Routers.Router({
      $rootEl: $('#main-content')
    });

    Instamart.stores = new Instamart.Collections.Stores();

    Backbone.history.start();
  }
};
