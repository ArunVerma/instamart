Instamart.Models.User = Backbone.Model.extend({
  urlRoot: "users",

  fullName: function(){
    return this.escape("fname") + " " + this.escape("lname");
  },

  toJSON: function(){
    var json = { user: _.clone(this.attributes) };
    return json;
  },

  // Cart helpers
  cartItems: function () {
    if (Instamart.cartItems.length == 0) {
      return [];
    } else {
      return Instamart.cartItems.where({cart_id : Instamart.currentUser.id});
    }
  },

  numCartItems: function () {
    var count = 0;

    _(this.cartItems()).each(function (item) {
      count += 1 * item.get('qty');
    });

    return count;
  },

  cartSubtotal: function () {
    var subtotal = 0;
    var cart_items = this.cartItems();

    if (!cart_items) {
      return 0;
    } else {
      Instamart.items.fetch();

      _(cart_items).each(function (cart_item) {
        price = Instamart.items.findWhere({ id: cart_item.get('item_id') }).get('price');
        subtotal += +cart_item.get('qty') * +price;
      });

      return subtotal.toFixed(2);
    }
  },

  // Cart functionality
  qtyInCart: function (item_id) {
    var cart_item = Instamart.cartItems.findWhere({ cart_id: Instamart.currentUser.id, item_id: item_id });

    if (cart_item) {
      return cart_item.get('qty');
    } else {
      return 0;
    }
  },

  addToCart: function (item_id) {
    // Look for item in cart items
    var cart_item = Instamart.cartItems.findWhere({ cart_id: Instamart.currentUser.id, item_id: item_id });

    // If item is already in cart, increment quantity by 1
    if (cart_item) {
      cart_item.set('qty', cart_item.get('qty') + 1);
      cart_item.save(null, {
        success: function () {
          Instamart.cartItems.add(cart_item, { merge: true });
          Instamart.cartItems.fetch();
        }
      });

    // Else, create a new cart item
    } else {
      var cart_item = new Instamart.Models.CartItem({ item_id: item_id });
      cart_item.save(null, {
        success: function () {
          Instamart.cartItems.add(cart_item, { merge: true });
          Instamart.cartItems.fetch();
        }
      });
    }
  },

  removeFromCart: function (item_id) {
    // Look for item in cart items
    var cart_item = Instamart.cartItems.findWhere({ cart_id: Instamart.currentUser.id, item_id: item_id });

    // If item exists in cart
    if (cart_item) {
      // If there's only one left, remove it completely
      if (cart_item.get('qty') === 1) {
        Instamart.cartItems.remove(cart_item);
        cart_item.destroy();
        Instamart.cartItems.fetch();
      // Else, decrement quantity by 1
      } else {
        cart_item.set('qty', cart_item.get('qty') - 1);
        cart_item.save(null, {
          success: function () {
            Instamart.cartItems.add(cart_item, { merge: true });
            Instamart.cartItems.fetch();
          }
        });
      }
    } else {
      alert('item doesnt exist in cart!');
    }
  },

  removeAllFromCart: function (item_id) {
    // Look for item in cart items
    var cart_item = Instamart.cartItems.findWhere({ cart_id: Instamart.currentUser.id, item_id: item_id });

    // If item exists in cart, remove all
    if (cart_item) {
      Instamart.cartItems.remove(cart_item);
      cart_item.destroy();
      Instamart.cartItems.fetch();
    } else {
      alert('item doesnt exist in cart!');
    }
  }
});

Instamart.Models.CurrentUser = Instamart.Models.User.extend({

  url: "session",

  initialize: function(options){
    this.listenTo(this, "change", this.fireSessionEvent);
  },

  // Session management
  isSignedIn: function() {
    return !this.isNew();
  },

  signIn: function(options){
    var model = this;
    var credentials = {
      "user[email]": options.email,
      "user[password]": options.password
    };

    $.ajax({
      url: this.url,
      type: "POST",
      data: credentials,
      dataType: "json",
      success: function(data){
        model.set(data);
        options.success && options.success();
      },
      error: function(){
        options.error && options.error();
      }
    });
  },

  signOut: function(options){
    var model = this;

    $.ajax({
      url: this.url,
      type: "DELETE",
      dataType: "json",
      success: function(data){
        model.clear();
        options.success && options.success();
      }
    });
  },

  fireSessionEvent: function(){
    if(this.isSignedIn()){
      this.trigger("signIn");
    } else {
      this.trigger("signOut");
    }
  }

});
