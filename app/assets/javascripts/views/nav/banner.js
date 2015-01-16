Instamart.Views.Banner = Marionette.ItemView.extend({
  template: JST['nav/banner'],

  className: 'hero-container',

  events: {
    'click .js-change-store': 'changeStore'
  },

  onRender: function () {
    this.$el.css({ 'background': '#0A6249'});
  },

  changeStore: function () {
    $('#warehouse-dropdown').addClass('ic-in');
  }
})
