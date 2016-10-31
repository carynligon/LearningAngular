app.controller('MainController', ['$scope', 'tasks', '$http', function($scope, tasks, $http) {
  console.log($scope);
  tasks.success(function(data) {
    $scope.tasks = data;
  });
  $scope.title = 'So Many Things To Do Today';
  $scope.subtitle = 'Let\'s get started!';
  $scope.plusOne =  function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
  $scope.addTask = function(index) {
    let data = {task: document.querySelector('.task-input').value, completed: false};
    $http.post('https://tiny-za-server.herokuapp.com/collections/caryns-to-dos',data)
              .success(function(data) {
                return data;
              })
              .error(function(err) {
                return err;
              });
    document.querySelector('.task-input').value = '';
  };
  $scope.deleteTask = function(task) {
    $http.delete('https://tiny-za-server.herokuapp.com/collections/caryns-to-dos/' + task._id)
        .success(function(resp) {
          console.log('deleted');
        })
  }
}]);
