var UserFood = Backbone.Model.extend({
  url: '/dashboards',


  // fetch: function(attributes, options) {
  //   options = _.defaults((options || {}), {url: "http://your.save.url.com/"});
  //   return Backbone.Model.prototype.save.call(this, attributes, options);
  // },

  destroy: function(model){

     debugger;
    $.ajax({
      
      url: '/daily_servings/' + model.id,
      method: 'delete',
      // data: model.food_id,
      success: function(data){
         
      //   this.View.render();
       }
  })
   }

})


