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

    this.$el.remove();
    this.model.destroy(this.model
    //   success: function(model, data){
    //   debugger;
    //     UserFoodCollection.render();
    // }
   )
  }

})