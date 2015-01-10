window.Instamart = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Instamart.router = new Instamart.Routers.Router({
      $rootEl: $('#main-content')
    });

    Instamart.zones = new Instamart.Collections.Zones();

    Backbone.history.start();
  }
};
