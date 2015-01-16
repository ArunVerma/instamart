Instamart.Models.CartItem = Backbone.Model.extend({
  urlRoot: "cart_items",

  defaults: function () {
    return {
      qty     : 1,
      cart_id : Instamart.currentUser.id
    }
  }
});
