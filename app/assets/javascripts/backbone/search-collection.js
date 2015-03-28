
console.log("loaded Search")
var SearchCollection = Backbone.Collection.extend({
  model: Search,
  url: '/dashboards'
 
})