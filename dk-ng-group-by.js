angular.module("ng-dk", [])
.filter("dkGroupBy", ['$cacheFactory', '$parse', function($cacheFactory, $parse){
  var cache = $cacheFactor('dkGroupBy');
  return function(array, id, key_path){
    var groups = cache.get(id) || cache.put(id, {});
    var parser = $parser(key_path);
    
    //Clear Cached OrderBy Object
    angular.forEach(groups, function(group){
      group.length = 0;
    })
    
    //Populate Cached OrderBy Object
    angular.forEach(array, function(entry){
      (groups[parser(entry)] || (groups[parser(entry)] = [])).push(entry);
    })
    
    //Remove Empty Arrays
    angular.forEach(groups, function(group, key){
      if(group.length === 0) delete groups[key];
    })
    
    return groups;
  }
}])
