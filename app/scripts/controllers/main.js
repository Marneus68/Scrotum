'use strict';

/**
 * @ngdoc function
 * @name scrotumApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scrotumApp
 */

angular.module('scrotumApp')
    .controller('MainCtrl', function ($scope) {
        $scope.whiteboard = {
            top : angular.element(document.getElementById('whiteboard')).offsetTop,
            left : angular.element(document.getElementById('whiteboard')).offsetLeft,
            width:800, 
            height:600
        };

        $scope.horizontalSeparators = [];
        $scope.verticalSeparators = [];
        $scope.notes = []; 
    
        $scope.resizeWiteboard = function(event) {

            $scope.whiteboard.top = event.target.offsetTop;
            $scope.whiteboard.left = event.target.offsetLeft;
            $scope.whiteboard.width = event.target.clientWidth;
            $scope.whiteboard.height = event.target.clientHeight;

            console.log($scope.whiteboard);

            $scope.placeSepartators();
        };

        $scope.placeSepartators = function() {
            var inc = $scope.whiteboard.height;
            $scope.horizontalSeparators.forEach(function(element, index) {
                $scope.horizontalSeparators[index].y = (index+1)*inc;
            });

            $scope.verticalSeparators.forEach(function(element, index) {
                
            });
        };

        $scope.increaseRows = function() {
            $scope.horizontalSeparators.push({
                id:'h_separtator_'+$scope.horizontalSeparators.length,
                index: $scope.horizontalSeparators.length,
                y: 0
            });
            $scope.placeSepartators();
        };

        $scope.increaseCols = function() {
            $scope.verticalSeparators.push({
                id:'h_vertical_'+$scope.verticalSeparators.length,
                index: $scope.verticalSeparators.length,
                x: 0
            });
            $scope.placeSepartators();
        };

        $scope.decreaseRows = function() {
            $scope.horizontalSeparators.pop();
        };

        $scope.decreaseCols = function() {
            $scope.verticalSeparators.pop();
        };

        $scope.addNote = function() {
            $scope.notes.push({
                id:'stickynote_'+$scope.notes.length,
                x:0,
                y:0,
                text:'This is the content of the node',
                color:'white'
            });
        };

        $scope.deleteNote = function(id) {
            $scope.notes.forEach(function(element, index) {
                if (element.id === id) {
                    $scope.notes.splice(index, 1);
                }
            });
        };
    });
