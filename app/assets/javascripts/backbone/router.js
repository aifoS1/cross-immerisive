var UserFoodRouter = Backbone.Router.extend({
 initialize: function(userFoodCollection){
 	this.collection  = userFoodCollection;

 },

  routes: { 
    '': 'index'

  },
  index: function(){
   this.collection.fetch({
    success: function(){ 
      var view = new UserFoodCollectionView({
      collection: this.collection
    })
      $(".user-foods").empty();
     // $("#food-diary").nextAll().empty();
      view.render();  
    }.bind(this)
   });
  }


})


