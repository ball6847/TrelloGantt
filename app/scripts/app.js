'use strict';

angular.module('trelloGanttApp', [
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
      .when('/chart', {
        templateUrl: 'views/chart.html',
        controller: 'ChartCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
