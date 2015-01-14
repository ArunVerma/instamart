window.Instamart = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Instamart.StoreApp = new Instamart.Routers.Store({
      $rootEl: $('body')
    });

    Instamart.LandingApp = new Instamart.Routers.Landing({
      $rootEl: $('body')
    });

    Instamart.currentUser = new Instamart.Models.CurrentUser();

    Instamart.zones = new Instamart.Collections.Zones;
    Instamart.stores = new Instamart.Collections.Stores([], {});
    Instamart.departments = new Instamart.Collections.Departments([], {});
    Instamart.aisles = new Instamart.Collections.Aisles([], {});
    Instamart.items = new Instamart.Collections.Items([], {});

    Instamart.currentUser.fetch({ async: false });
    Instamart.zones.fetch({ async: false });
    Instamart.stores.fetch({ async: false });
    Instamart.departments.fetch({ async: false });
    Instamart.aisles.fetch({ async: false });
    Instamart.items.fetch({ async: false });

    Backbone.history.start();
  }
};
