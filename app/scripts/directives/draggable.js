'use strict';

/**
 * @ngdoc directive
 * @name scrotumApp.directive:draggable
 * @description
 * # draggable
 */

angular.module('scrotumApp')
    .directive('myDraggable', ['$document', function($document) {
        return {
            restrict: 'AE',
            scope: true,
            
            link: function(scope, element) {
                var startX = 0, 
                    startY = 0,
                    x = 0, 
                    y = 0;
        
                var whiteboard = scope.whiteboard;

                console.log(whiteboard);

                element.bind('click', function(event) {
                    event.stopPropagation();
                });

                element.on('mousedown', function(event) {
                    // Prevent default dragging of selected content
                    event.preventDefault();
                    startX = event.pageX - x;
                    startY = event.pageY - y;
                    $document.on('mousemove', mousemove);
                    $document.on('mouseup', mouseup);
                });

                function mousemove(event) {
                    y = event.pageY - startY;
                    x = event.pageX - startX;
                
                    var notebounds = {
                        x : x+parseInt(element.css('width').replace('px','')),
                        y : y+parseInt(element.css('height').replace('px',''))
                    };

                    if (x < whiteboard.left) {
                        x = whiteboard.left;
                    }

                    if (y < whiteboard.top) {
                        y = whiteboard.top;
                    }

                    if (notebounds.x > whiteboard.width + whiteboard.left) {
                        x = (whiteboard.width - parseInt(element.css('width').replace('px',''))) + whiteboard.left;
                    }

                    if (notebounds.y > whiteboard.height + whiteboard.top) {
                        y = (whiteboard.height - parseInt(element.css('height').replace('px',''))) + whiteboard.top;
                    }

                    element.css({
                        top: y + 'px',
                        left:  x + 'px'
                    });
                }

                function mouseup() {
                    $document.off('mousemove', mousemove);
                    $document.off('mouseup', mouseup);
                }
            }
        };
}]);

