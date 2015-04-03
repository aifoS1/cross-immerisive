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
   "click .add": 'addServing'
  },

  addServing: function() {
    var name = this.model.attributes.item_name
    var sugars = this.model.attributes.nf_sugars || 0;
    var servings = $('input[name=amount]').val();

    var food = new Food({
      name: name,
      sugar_amount: sugars
    })

    food.save({}, {
      success: function () {
        var userFood = new UserFood({
          food_id: food.id,
          servings: servings
        });

        userFood.save({}, {
          success: function () {
            userFoodCollection.add( userFood );
          }
        })
      }
    })
  }
})

