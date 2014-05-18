'use strict';

angular.module('iPollApp')
  .controller('PollCtrl', function ($scope, $stateParams, $ionicSideMenuDelegate ) {
    console.log('poll state activated');
    $scope.toggleCategories = function(){
    	$ionicSideMenuDelegate.toggleLeft();
    };

  });
