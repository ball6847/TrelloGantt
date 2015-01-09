'use strict';

angular.module('trelloGanttApp', [
  'trelloGanttApp.common',
  'trelloGanttApp.trello',
  'trelloGanttApp.board',
  'trelloGanttApp.card',
  'trelloGanttApp.chart',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'gantt'
  ])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/chart/:boardID', {
    templateUrl: 'views/chart.html',
    controller: 'ChartCtrl'
  })
  .when('/boards', {
    templateUrl: 'views/boards.html',
    controller: 'BoardsCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
})
.filter('reverse', function() {
  return function(items) {
      return (items !== undefined)? items.slice().reverse() :  [];
  };
});
