var UserFoodCollectionView = Backbone.View.extend({
  tagName: 'ul',
  className: 'user-foods',
  initialize: function(){
    this.render();
  
    // this.listenTo(this.collection, 'add', this.render)
  },
  render: function(){
    this.$el.empty();
    // $("#food-diary").nextAll().empty();
    var thisCollView = this;

    this.collection.models.forEach(function(model){
    	
      var newView = new UserFoodView({model: model});

      thisCollView.$el.append(newView.$el);
    })

    $('#user-choices-container').append(this.$el)

    // $('#food-diary').after(this.$el);

    // $(this.$el).insertAfter('#food-diary');
  }

})
	
