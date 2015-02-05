Instamart.Views.SignIn = Backbone.View.extend({

  initialize: function (options) {
    this.callback = options.callback;
    this.listenTo(Instamart.currentUser, "signIn", this.signInCallback);
  },

  events: {
    "submit form": "submit",
    "click a.guest-login": "guestLogin"
  },

  template: JST['sessions/signin'],

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var formData = $('form#login-form').serializeJSON().user;

    Instamart.currentUser.signIn({
      email: formData.email,
      password: formData.password,
      error: function(data){
        this.$el.find('form.new_user').prepend('<div class="alert alert-error" style="text-align: left;"><ul><li>Something went wrong!</li></ul></div>');
      }.bind(this)
    });
  },

  guestLogin: function (event) {
    event.preventDefault();
    $('input#login_user_email').val('guest@instamart.com');
    $('input#user_password').val('password');

    Instamart.currentUser.signIn({
      email: 'guest@instamart.com',
      password: 'password',
      error: function(data){
        this.$el.find('form.new_user').prepend('<div class="alert alert-error" style="text-align: left;"><ul><li>Something went wrong!</li></ul></div>');
      }.bind(this)
    });
  },

  signInCallback: function (event) {
    if(this.callback) {
      this.callback();
    } else {
      Instamart.start();
      Backbone.history.navigate("", { trigger: true });
    }
  }

});
