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
        $scope.cols = 0;
        $scope.rows = 0;

        $scope.notes = []; 
    
        $scope.increaseRows = function() {
            $scope.rows++;
        };

        $scope.increaseCols = function() {
            $scope.cols++;
        };

        $scope.decreaseRows = function() {
            if ($scope.rows > 0) {
                $scope.rows--;
            }
        };

        $scope.decreaseCols = function() {
            if ($scope.cols > 0) {
                $scope.cols--;
            }
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
            $scope.notes.forEach(function(element, index, array) {
                if (element.id === id) {
                    $scope.notes.splice(index, 1);
                }
            });
        };
    });
