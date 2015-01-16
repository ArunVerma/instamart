Instamart.Routers.Session = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "landing" : "landing",
    "signup"  : "signUp",
    "login"   : "signIn",
    "logout"  : "signOut"
  },

  landing: function(){
    if (Instamart.currentUser.isSignedIn()) {
      Backbone.history.navigate("whole-foods");
      return;
    }

    var view = new Instamart.Views.Landing;
    this._swapView(view);
  },

  signUp: function(){
    if (Instamart.currentUser.isSignedIn()) {
      Backbone.history.navigate("");
      return;
    }

    var model = new Instamart.users.model();
    var formView = new Instamart.Views.SignUp({
      collection: this.collection,
      model: model
    });

    this._swapView(formView);
  },

  signOut: function () {
    if (!Instamart.currentUser.isSignedIn()) {
      Backbone.history.navigate("");
      return;
    }

    Instamart.currentUser.signOut({
      success: function () {
        Backbone.history.navigate("", {trigger:true});
      }
    });
  },

  signIn: function(callback){
    if (Instamart.currentUser.isSignedIn()) {
      Backbone.history.navigate("");
      return;
    }

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
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
