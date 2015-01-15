Instamart.Views.ItemHeader = Marionette.ItemView.extend({
  getTemplate: function () {
    if (this.model.urlRoot === 'departments') {
      return JST['items/headerD']
    } else {
      return JST['items/headerA']
    }
  },

  className: "item-header"
})
