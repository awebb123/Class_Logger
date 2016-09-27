angular.module('cp')
    .controller('AccountCtrl', ['$scope', function($scope) {
        console.log('AccountCtrl here');

        $scope.sideNav = function() {
            console.log('SideNav');
            $(".button-collapse").sideNav();
        };
    }]);
