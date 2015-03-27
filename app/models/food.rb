class Food < ActiveRecord::Base
  
 def self.call_api(query)

    
   baseURL = "https://api.nutritionix.com/v1_1/search/"
   appId = ENV["NUTRITIONIX_API_ID"]
   appKey = ENV["NUTRITIONIX_API_KEY"]

   results = Unirest.post "https://api.nutritionix.com/v1_1/search/",

 parameters: {
    appId: appId,
    appKey: appKey,  
    fields:["item_name","brand_name","nf_sugars"],
    query: query,
    sort:{
      field: "_score",
      order: "desc"
    },
    filters:{
      item_type:2
    }
 }

 results.body["hits"].map do |hit|

    hit["fields"]

  end

 #{query}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_sugars2C&filters%3Ditem_type%3A2%2C&sort%3Dfield%3D_score%2Corder%3Ddesc%2C&filters=item_type%3D2&appId=#{appId}&appkey=#{appKey}

  end

end
