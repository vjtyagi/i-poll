'use strict';

angular.module('iPollApp')
  .directive('jBarChart', function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      
      	var distances = [ [50, "#AA8888", 5000, "Yes"], [25, "#88BB88", 2500, "No"], [25, "#8888CC", 2500, "Can't Say"] ];

      	d3.select(element[0])
      	  .selectAll("div")
      	  .data(distances)
      	  .enter()
      	  .append("div")
      	  .style("height", "20px")
 		  .style("padding-left", "5px")
      	  .style("margin-bottom", "5px")
      	  .style("opacity", 0)
      	  .style("background", function(d){ return d[1]; })
      	  .style("width", function(d){ return (d[0]*4)+ 'px'; })
      	  .text(function(d){ return d[3] + " - " + d[2]; })
      	  .style('opacity', 1);
        
        
        
      }
    };
  });
