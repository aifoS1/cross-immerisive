var SearchCollectionView = Backbone.View.extend({
  tagName: 'ul',
  className: 'search-results',
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.empty();
    var thisCollView = this;

    this.collection.models.forEach(function(model){
      var newView = new SearchView({model: model});

      thisCollView.$el.append(newView.$el);
    })

    $('body').append(this.$el);
  }
})