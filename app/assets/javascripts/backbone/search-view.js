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
    var name = this.model.attributes.item_name
    var sugars = this.model.attributes.nf_sugars
    var servings = $('input[name=amount]').val();

    var food = new Food({
        name: name,
        sugar_amount: sugars,
        amount: servings 
     })

     food.save();

     this.showUserDay();
   
  },
  showUserDay: function(){

    var userFoodCollection = new UserFoodCollection;
 
    userFoodCollection.fetch({
      // url: '/daily_servings',
      success: function(collection, data){
      var view = new UserFoodCollectionView({
        collection: userFoodCollection 
        });
       
      view.render();    
      },
     error: function(request, data) {
      console.log("error")
    }
  });
  }  
})
