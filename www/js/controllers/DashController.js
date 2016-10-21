angular.module('cp')

    .controller('DashCtrl', ['$scope', ($scope) => {
        console.log('DashCtrl here');

        $scope.openFab = () => {
            console.log('firing');
            $('.fixed-action-btn').openFAB();
        };

        $scope.sideNav = () => {
            console.log('SideNav');
            $(".button-collapse").sideNav();
        }

    }]);