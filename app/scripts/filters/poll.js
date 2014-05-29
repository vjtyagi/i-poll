'use strict';

angular.module('iPollApp')
  .filter('poll', function () {
    return function (polls, categoryId) {
      
      return _.filter(polls, function(poll){
      	return poll.category_id == categoryId;
      });

    };
  });
