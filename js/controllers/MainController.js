app.controller('MainController', ['$scope', 'tasks', 'newTask', function($scope, tasks, newTask) {
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
    newTask.success(function(data) {
      console.log(data);
    })
    document.querySelector('.task-input').value = '';
  };
  $scope.deleteTask = function(index) {
    $scope.tasks.splice(index, 1);
  }
}]);
