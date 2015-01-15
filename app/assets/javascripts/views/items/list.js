Instamart.Views.ItemsList = Marionette.CollectionView.extend({
  getChildView: function () {
    return Instamart.Views.ItemView;
  },

  className: 'items-list unstyled',

  tagName: 'ul'
});
