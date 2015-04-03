console.log("UserFoodView")

var UserFoodView = Backbone.View.extend({
 tagName: 'li',
 className: 'food-choice',
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html(this.template());
  },
  template: function(){

  return HandlebarsTemplates['show'](this.model.attributes); 
    
  },
  events: {
   "click .removeFood": 'remove'
  }, 
  remove: function(){
    
    this.$el.remove();
     this.model.destroy()
  }

})