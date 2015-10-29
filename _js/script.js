/*globals angular */

var app = angular.module('schoolApp', []);

app.controller('schoolController', ['$scope', function ($scope) {

    $scope.oData = [
        {
            id: 1,
            file: "_text/001.html",
            course: "javascript-roadtrip-part2",
            subject: "Loops",
            data: "this is code\nthis is not"
        }, {
            id: 2,
            course: "javascript-roadtrip-part2",
            subject: "Conditionals"
        }, {
            id: 3,
            course: "javascript-roadtrip-part2",
            subject: "Built-Ins"
        }, {
            id: 4,
            course: "javascript-roadtrip-part2",
            subject: "Declarations"
        }, {
            id: 5,
            course: "javascript-roadtrip-part2",
            subject: "Arrays"
        }
    ];

}]);