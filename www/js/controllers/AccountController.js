angular.module('cp')

    .controller('AccountCtrl', ['$scope', function ($scope) {
        console.log('AccountCtrl here');

        $scope.imagePath = '../../imgs/icons/account_icon.svg';

        $scope.sideNav = function () {
            console.log('SideNav');
            $(".button-collapse").sideNav();
        }
    }]);
