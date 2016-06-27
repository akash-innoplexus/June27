var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // for any unmatched url, redirect to /Add

  $urlRouterProvider.otherwise("/home");

  //now set up the html
  $stateProvider
  .state('home', {
    url: "/home",
    templateUrl: "partials/home.html"
    // controller: 'AppController'
  })
  .state('home.add', {
    url: "/add",
    // views: {
    //   templateUrl: 'partials/add.html'
    //   controller: 'myController'
    // }
    templateUrl: "partials/add.html",
    controller: function($scope) {

    }
  })
})
