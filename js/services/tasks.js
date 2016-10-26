app.factory('tasks', ['$http', function($http) {
  return $http.get('https://tiny-za-server.herokuapp.com/collections/caryns-to-dos')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
