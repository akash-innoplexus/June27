var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // for any unmatched url, redirect to /Add

  $urlRouterProvider.otherwise("/home");

  //now set up the html
  $stateProvider
  .state('home', {
    url: "/home",
    templateUrl: "partials/state1.html"
    // controller: 'AppController'
  })
  .state('navbar', {
    url: "/navbar",
    // views: {
    //   templateUrl: 'partials/add.html'
    //   controller: 'myController'
    // }
    templateUrl: "partials/navbar.html",
    controller: function($scope) {
    // console.log("this is working");

    }
  });
  // .state('home.')
});
