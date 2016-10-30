app.controller('MainController', ['$scope', 'tasks', function($scope, tasks) {
  console.log($scope);
  tasks.success(function(data) {
    $scope.tasks = data;
  });
  // newTask.success(function(data) {
  //   $scope.tasks =
  // });
  $scope.title = 'So Many Things To Do Today';
  $scope.subtitle = 'Let\'s get started!';
  $scope.plusOne =  function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
  $scope.addTask = function(index) {
    $http.post('https://tiny-za-server.herokuapp.com/collections/caryns-to-dos')
      .data({task: document.querySelector('.task-input').value, completed: false});
    document.querySelector('.task-input').value = '';
  };
  $scope.deleteTask = function(index) {
    $scope.tasks.splice(index, 1);
  }
}]);
