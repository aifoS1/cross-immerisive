var UserFoodRouter = Backbone.Router.extend({
 initialize: function(userFoodcollection){
 	this.userFoodCollection = window.userFoodCollection = new UserFoodCollection();
 	// this.searchcollection  = new SearchCollection;
 },

  routes: { 
    'foods/new': 'index'
  },

  index: function(){
    this.userFoodCollectionView = new UserFoodCollectionView({
       collection: this.userFoodCollection,
       el: $('.user-foods')
    })
    // ,
    // new SearchCollectionView({
    // 	 collection: searchCollection,
    // 	 el: $('.search-results')
    // });
  }

})


