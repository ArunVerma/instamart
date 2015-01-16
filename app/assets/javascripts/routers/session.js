Instamart.Routers.Session = Backbone.Router.extend({
  routes: {
    "landing" : "landing",
    "signup"  : "signUp",
    "login"   : "signIn",
    "logout"  : "signOut"
  },

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.collection = new Instamart.Collections.Users();
    this.collection.fetch();
  },

  landing: function(){
    if (!this._requireSignedOut()) { return; }

    var view = new Instamart.Views.Landing;
    this._swapView(view);
  },

  signUp: function(){
    if (!this._requireSignedOut()) { return; }

    var model    = new Instamart.users.model();
    var formView = new Instamart.Views.SignUp({
      collection : this.collection,
      model      : model
    });

    this._swapView(formView);
  },

  signOut: function () {
    if (!this._requireSignedIn()) { return; }

    Instamart.currentUser.signOut({
      success: function () {
        Backbone.history.navigate("", {trigger : true});
      }
    });
  },

  signIn: function(callback){
    if (!this._requireSignedOut(callback)) { return; }

    var signInView = new Instamart.Views.SignIn({
      callback: callback
    });

    this._swapView(signInView);
  },

  _requireSignedIn: function(callback){
    if (!Instamart.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      this.signIn(callback);
      return false;
    }

    return true;
  },

  _requireSignedOut: function(callback){
    if (Instamart.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      callback();
      return false;
    }

    return true;
  },

  _goHome: function(){
    Backbone.history.navigate("", {trigger : true});
  },

  _swapView: function (view) {
    var that = this
    if (this.currentView) {
      this.currentView.$el.fadeOut(500, function() {
        that.currentView.remove()
        that.currentView = view;
        that.$rootEl.html(view.render().$el.hide().fadeIn(500))
      })
    } else {
      that.currentView = view;
      that.$rootEl.html(view.render().$el);
    }
  }

});
