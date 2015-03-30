console.log("UserFoodView")

var UserFoodView = Backbone.View.extend({
 tagName: 'li',
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
   "click .remove-food": 'remove'
  }, 
  remove: function(){
     debugger;
    this.$el.remove();
    data = {
      id: this.model.id,
      food_id: this.model.attributes.food_id
    }
    this.model.destroy(data)
  }

})