'use strict';

angular
  .module('iPollApp', [
        'ionic'
  ])
.config(function($stateProvider, $urlRouterProvider){
  
  $urlRouterProvider.otherwise("/poll/categories/1");

  $urlRouterProvider.when("/poll", "/poll/categories/1");

  $stateProvider.state("poll", {
    url: '/poll',
    templateUrl: 'views/parent.html',
    controller: 'ParentCtrl'
  });

  $stateProvider.state("poll.categories", {
      url : '/categories',
      views:{
        "poll-container@poll": {
          templateUrl: 'views/poll.html',
          controller: 'PollCtrl'
        }
      }
  });

  $stateProvider.state("poll.categories.category", {
    url : '/:category',
    views: {
      "poll-list@poll.categories": {
        templateUrl: 'views/poll_list.html'

      },
      "poll-categories@poll.categories" : {
        templateUrl: "views/categories.html"
        
      }
    }
  });

  $stateProvider.state("poll.show", {
    url : '/show/:pollID',
    views: {
      "poll-container@poll": {
          templateUrl: 'views/poll_result.html',
          controller: 'ShowpollCtrl'

      }
    }
  });


  // $stateProvider.state('home', {
  //    url : "/",
  //    templateUrl : "views/main.html",
  //    controller: 'MainCtrl'
  // });

})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

