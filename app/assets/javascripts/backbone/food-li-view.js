var FoodLiView = Backbone.View.extend({
  tagName: 'li',
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html(this.template());
  },
  template: function(){
    return Handlebars.templates['food-results'](this.model);
  }
})