app.factory('newTask', ['$http', function($http,data) {
  return $http.post('https://tiny-za-server.herokuapp.com/collections/caryns-to-dos',data)
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
