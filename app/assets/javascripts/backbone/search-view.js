var SearchView = Backbone.View.extend({
  tagName: 'li',
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html(this.template());
  },
  template: function(){
      
  return HandlebarsTemplates['index'](this.model.attributes); 
    
  },
  events:{
   "click .add": 'addtoDB'
  },
  addtoDB: function(){
   console.log("added");   

  var name = this.model.attributes.item_name
  var sugars = this.model.attributes.nf_sugars
  var servings = $('input[name=amount]').val();


     var userFood = new UserFood({
        name: name,
        sugar_amount: sugars,
        amount: servings 
     })

     userFood.save();
   
  }
  
})
