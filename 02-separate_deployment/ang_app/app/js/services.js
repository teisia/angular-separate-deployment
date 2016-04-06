app.service("CatService", function($http){
  var CatService = {};

  CatService.getCats = function(){
    return $http.get("http://localhost:3000/cats", {method: "jsponp"});
    // return $http.get("https://frozen-badlands-34577.herokuapp.com/cats", {method: "jsonp"});
  }

  CatService.getCat = function(cat_id){
    return $http.get("http://localhost:3000/cats/"+cat_id);
    // return $http.get("https://frozen-badlands-34577.herokuapp.com/cats/"+cat_id, {method: "jsonp"});
  }

  CatService.newCat = function(cat_object) {
    return $http.post("http://localhost:3000/cats/", cat_object);
  }

  return CatService;
});
