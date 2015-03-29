var UserFood = Backbone.Model.extend({
  url: '/dashboards',

  destroy: function(){

  $.ajax({
  	
      url: '/daily_servings/' + this.id,
      method: 'delete',
      success: function(){
      	debugger;
      // 	this.View.render();
       }
  })
   }.bind(this)

})


