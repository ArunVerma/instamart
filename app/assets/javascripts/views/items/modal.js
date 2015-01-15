Instamart.Views.ItemModal = Marionette.ItemView.extend({
  template: JST['items/modal'],

  events: {
    'click .item-detail-overlay': 'dismiss',
    'click .close' : 'dismiss'
  },

  className: 'item-detail hide',

  initialize: function () {
    $('.item-detail-overlay').click(this.dismiss);
  },

  dismiss: function (event) {
    event.preventDefault();
    $('.item-detail-overlay').css({ 'display': 'none' });
    if ($('.item-detail.hide').length > 0) $('.item-detail.hide').remove();
    this.remove();
  }
});
