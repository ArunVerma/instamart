Instamart.Views.ItemShow = Backbone.View.extend({

  events: {
    'click': 'showModal'
  },

  template: JST['items/show'],

  tagName: 'li',

  initialize: function (options) {
    this.aisle = Instamart.aisles.getOrFetch(this.model.get('aisle_id'));
    this.dept = Instamart.departments.getOrFetch(this.aisle.get('dept_id'));
    this.$el.attr('class', 'aisle_' + this.aisle.id + ' department_' + this.dept.id + ' has-details item'),
    this.$el.attr('data-item-id', this.model.id);
    this.$el.attr('data-department-id', this.dept.id);
    this.$el.attr('data-aisle-id', this.aisle.id);
  },

  showModal: function () {
    this.modalView = this.modalView || new Instamart.Views.ItemModal({ model: this.model });
    $('body').append(this.modalView.render().$el);
    this.modalView.delegateEvents();
  },

  render: function () {
    var content = this.template({ item: this.model });
    this.$el.html(content);
    return this;
  }
})
