'use strict';

/**
 * @ngdoc directive
 * @name scrotumApp.directive:draggable
 * @description
 * # draggable
 */
/*
angular.module('scrotumApp')
    .directive('draggable', function () {
        return {
            template: '<div></div>',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                element.text('this is the draggable directive');
            }
        };
});
*/

angular.module('scrotumApp')
.directive('myDraggable', ['$document', function($document) {
  return function(scope, element) {
    var startX = 0, startY = 0, x = 0, y = 0;

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
      element.css({
        top: y + 'px',
        left:  x + 'px'
      });
    }

    function mouseup() {
      $document.off('mousemove', mousemove);
      $document.off('mouseup', mouseup);
    }
  };
}]);

