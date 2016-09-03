angular.module('cp')

    .controller('AccountCtrl', ['$scope', function ($scope) {
        console.log('AccountCtrl here');
        $scope.openFab = function () {
            console.log('firing');
            $('.fixed-action-btn').openFAB();
        };

        $scope.sideNav = function () {
            console.log('SideNav');
            $(".button-collapse").sideNav();
        }

    }]);
