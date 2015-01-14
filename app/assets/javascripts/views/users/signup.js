Instamart.Views.SignUp = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(this.model, "sync change", this.render);
  },

  template: JST['users/signup'],

  events: {
    "submit form": "submit"
  },

  render: function(){
    var html = this.template({ user: this.model });
    this.$el.html(html);

    return this;
  },

  submit: function(event){
    event.preventDefault();

    var $form = $(event.currentTarget);
    var userData = $form.serializeJSON().user;
    debugger;
    this.model.set(userData);
    this.model.save({}, {
      success: function(){
        Instamart.currentUser.fetch();
        this.collection.add(that.model, { merge: true });
        Backbone.history.navigate("", { trigger: true });
      }.bind(this),
      error: function(data){
        this.$el.find('form.new_user').prepend('<div class="alert alert-error" style="text-align: left;"><ul><li>You fucked up!</li></ul></div>')
        console.log(data);
      }.bind(this)
    });
  }

});
