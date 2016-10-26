app.controller('MainController', ['$scope', function($scope) {
  console.log($scope);
  $scope.title = 'So Many Things To Do Today';
  $scope.subtitle = 'Let\'s get started!';
  $scope.tasks = [
  {
    task: 'get haircut',
    timestamp: new Date()
  }
];
  $scope.plusOne =  function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
  $scope.addTask = function(index) {
    $scope.tasks = $scope.tasks.concat({
      task: document.querySelector('.task-input').value,
      timestamp: new Date()
    });
  }
}]);
