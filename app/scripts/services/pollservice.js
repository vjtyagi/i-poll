'use strict';

angular.module('iPollApp')
  .service('Pollservice', function Pollservice(pollFilter) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getPollCategories = function() {
    	return [

    		{ id : 1, title : "Latest Polls" },
    		{ id: 2, title : "Entertainment"},
    		{ id : 3, title : "Sports"},
    		{ id : 4, title : "Politics"}
    		
    	];
    };

    this.getPollCategoryById = function( categoryId ) {
    	
    	var categories = this.getPollCategories(),
    		category =  _.filter( categories, function(category){
	    		return category.id == categoryId;
	    	});

	    return 	( category && category.length )? category[0]: {};
    };

    this.getAllPolls = function(){
    	return [
    		{ id : 1, title : "Do you like peanut butter ?", category_id : 1, image: "blue-album.jpg" },
    		{ id : 2, title : "Do you like IPL ?", category_id : 3, image: "dookie.jpg" },
    		{ id : 3, title : "Did you like  two states ?", category_id : 2, image: "license-to-ill.jpg" },
    		{ id : 4, title : "is Arvind Kejriwal fake ?", category_id : 4, image: "nevermind.jpg" }
    	];
    };

    this.getPollsByCategory = function( categoryId ){
    	return pollFilter( this.getAllPolls(), categoryId );
    };

  });
