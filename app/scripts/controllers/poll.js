'use strict';

angular.module('iPollApp')
  .controller('PollCtrl', 
  	function ($scope, $state, $timeout, $stateParams,$ionicModal, $ionicLoading, $ionicSideMenuDelegate, $ionicNavBarDelegate, Pollservice ) {
    console.log('poll state activated');
    
  	
    $scope.activePollCategory  =  Pollservice.getPollCategoryById($state.params.category);
    $scope.polls = Pollservice.getPollsByCategory($scope.activePollCategory.id);

    $scope.toggleCategories = function() {
    	$ionicSideMenuDelegate.toggleLeft();
    	
    };

    $scope.selectPolls = function( categoryId ) {
    	//$scope.showLoader();
    	$scope.activePollCategory = Pollservice.getPollCategoryById(categoryId);
    	$scope.polls = Pollservice.getPollsByCategory(categoryId);
    	
    	
    	//$timeout(function(){
    		$ionicSideMenuDelegate.toggleLeft(false);
    		$state.go("poll.categories.category", {category: categoryId});
    		//$ionicLoading.hide();
    	//}, 500);
    	
    };

    $scope.categories = Pollservice.getPollCategories();

    $ionicModal.fromTemplateUrl('views/new_task.html', function(modal) {
	    $scope.taskModal = modal;
	  }, {
	    scope: $scope,
	    animation: 'slide-in-up'
	  });
    
     $scope.newTask = function() {
     	
	    $scope.taskModal.show();
	 };

	  $scope.closeNewTask = function() {
	    $scope.taskModal.hide();
	  };

	  $scope.showLoader = function(){
	  	$ionicLoading.show({
	  		content: '<div class = "cust-loader"><img src = "images/cloud-icon.png" class = "animation-rotate" /></div>',
    		animation: 'fade-in',
    		showBackdrop: false,
    		showDelay: 0
	  	});
	  };

	  $scope.hideLoader = function(){
	  	$ionicLoading.hide();
	  };
	  $scope.showPoll = function( pollId ){
	  	console.log('show poll called');
	  	$scope.showLoader();
	  	
	  	$timeout(function(){

	  		$state.go("poll.show", {pollID: pollId});
	  		$scope.hideLoader();

	  	}, 1000);
	  
	  };

  });
