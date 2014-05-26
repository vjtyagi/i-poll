'use strict';

angular.module('iPollApp')
  .directive('jPieChart', function () {
    return {
    
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the jPieChart directive');
     	
        var vis = d3.select(element[0])
        			.append("svg")
        	   		.attr("width", 250)
        	   		.attr("height", 200);

       	var svg = vis[0][0];
       	var width = Math.round(svg.offsetWidth/2);
       	var height  = Math.round(svg.offsetHeight/2);



		var pieData = [ [0,50, "#AA8888"], [50,75, "#88BB88"], [75,100, "#8888CC"] ];
		var scale = d3.scale.linear()
					  .domain([0,100])
					  .range([0, 2*Math.PI]);

		var arc = d3.svg.arc()
					.innerRadius(20)
					.outerRadius(70)
					.startAngle( function(d){ return scale(d[0]); } )
					.endAngle(function(d){ return scale(d[1]) } );

		var chart = vis.selectAll("path")
						.data(pieData)
						.enter()
						.append("path")
						.attr("d", arc)
						.style("fill", function(d){ return d[2]; })
						.attr("transform", "translate("+width+","+ height+")");
      }

    };
  });
