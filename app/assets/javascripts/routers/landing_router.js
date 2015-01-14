Instamart.Routers.Landing = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.collection = new Instamart.Collections.Users();
    this.collection.fetch();
  },

  routes: {
    "": "home",
    "signup": "new",
    "login": "signIn"
  },

  home: function(){
    var callback = this.home.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    Backbone.history.navigate("stores/1", { trigger: true });
  },

  new: function(){
    if (!this._requireSignedOut()) { return; }

    var model = new this.collection.model();
    var formView = new Instamart.Views.SignUp({
      collection: this.collection,
      model: model
    });

    this._swapView(formView);
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
    Backbone.history.navigate("", { trigger: true });
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
