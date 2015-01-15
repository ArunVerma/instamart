Instamart.Views.SecondaryNav = Backbone.Marionette.ItemView.extend({
  template: JST['nav/secondary'],

  className: 'navbar-inner',

  id: 'sub-nav-wrapper',

  templateHelpers: function () {
    debugger;
    return {
      dept: this.model
    };
  }
})
