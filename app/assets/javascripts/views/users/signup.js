Instamart.Views.SignUp = Backbone.Marionette.ItemView.extend({

  template: JST['users/signup'],

  events: {
    "submit form": "submit",
    "click button": "submit"
  },

  submit: function(event){
    event.preventDefault();
    var userData = $('form').serializeJSON().user;
    this.model.set(userData);
    this.model.save({}, {
      success: function(){
        Instamart.currentUser.fetch({ async: false });
        Instamart.users.add(this.model, { merge: true });
        // Instamart.storeRouter.navigate("", { trigger: true });
      }.bind(this),
      error: function(data){
        this.$el.find('form.new_user').prepend('<div class="alert alert-error" style="text-align: left;"><ul><li>Something went wrong!</li></ul></div>')
        console.log(data);
      }.bind(this)
    });
  }

});
