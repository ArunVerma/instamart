Instamart.Views.ItemView = Marionette.ItemView.extend({
  template: JST['items/view'],

  tagName: 'li',

  className: 'has-details item',

  events: {
    'click' : 'showModal'
  },

  showModal: function () {
    var view = new Instamart.Views.ItemModal({ model: this.model });
    $('body').append(view.render().el);
    $('.item-detail-overlay').css({ 'display': 'block' });
    $('.item-detail.hide').css({ 'display': 'block' });
  }
})
