Instamart.Collections.Zones = Backbone.Collection.extend({

  model: Instamart.Models.Zone,
  url: 'zones',

  getOrFetch: function (id) {
    var zone = this.get(id);

    if (!zone) {
      zone = new Instamart.Models.Zone({ id: id });
      zone.fetch({
        success: function () {
          this.add(zone);
        }.bind(this)
      });
    } else {
      zone.fetch();
    }

    return zone;
  }

});
