 angular.module('app', ['ngRoute', 'ngResource', 'Controllers', 'Services'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/todos.html',
      controller: 'TodoController'
    })

    .when('/:id', {
      templateUrl: 'partials/todoDetails.html',
      controller: 'TodoDetailCtrl'
   });
}]);