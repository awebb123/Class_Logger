angular.module('cp')

    .controller('DashCtrl', ['$scope', function ($scope) {
        console.log('DashCtrl here');
        $scope.openFab = function () {
            console.log('firing');
            $('.fixed-action-btn').openFAB();
        };

        $scope.sideNav = function () {
            console.log('SideNav');
            $(".button-collapse").sideNav();
        }

    }]);
