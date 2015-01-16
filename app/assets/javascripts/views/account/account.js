Instamart.Views.Account = Marionette.ItemView.extend({
  template: JST['account/account'],

  initialize: function () {
    this._fname = this.model.get('')
  },

  templateHelpers: function () {
    return {
      first_name : this.model.get('fname'),
      last_name  : this.model.get('lname'),
      email      : this.model.get('email'),
      mobile     : 2125802000
    }
  }
})
