//Start by declaring and intializing a variable "app"
//assigns "angular.module" to that variable
//passes 'chirpApp' and an empty array into angular.module
//basically, its calling the ng-app tag from the top body div in the html
var app = angular.module('chirpApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    //the timeline display
    .when('/', {
      templateUrl: 'main.html',
      controller: 'mainController'
    })
    //the login display
    .when('/login', {
      templateUrl: 'login.html',
      controller: 'authController'
    })
    //the signup display
    .when('/register', {
      templateUrl: 'register.html',
      controller: 'authController'
    });
});
//calling the 'app' var from above
//assigning this as the 'controller' of 'app'
//passing in mainController and function($scope)
//and opening a function tag
  app.controller('mainController', function($scope){

//declaring a new 'posts' var and assinging it as an empty array
    $scope.posts = [];

//declaring a 'newPost' var and assinging an object to it with three params
//closing the func
    $scope.newPost = {created_by: '', text: '', created_at: ''};


//creating a new 'post' var and assinging it to a function
    $scope.post = function(){

//this statement is doing TWO THINGS!!!!
//its drawing a link between the newPost above and the 'post' var
//that was just initialized...also, it's...
//accesses the 'date.now' operater and assigns it to the 'newPost' var
      $scope.newPost.created_at = Date.now();

// This statement takes the posts array and pushes 'newPost' onto the
//end of it
      $scope.posts.push($scope.newPost);

//ties the 'newPost' and 'post' objects together
      $scope.newPost = {created_by: '', text: '', created_at: ''};
    };
  });


  app.controller('authController', function($scope) {
    $scope.user = {username: '', password: ''};
    $scope.error_message = '';

    $scope.login = function(){
      $scope.error_message = 'login request for ' + $scope.user.username;
    };
  });
