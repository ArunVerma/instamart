Instamart.Views.Banner = Marionette.ItemView.extend({
  template: JST['nav/banner'],

  className: 'hero-container',

  onRender: function () {
    this.$el.css({ 'background': '#0A6249'});
  }
})
