angular.module('cp')

    .controller('AccountCtrl', ['$scope', function ($scope) {
        console.log('AccountCtrl here');

        $scope.imagePath = '../../imgs/icons/dev.jpg';

        $scope.sideNav = function () {
            console.log('SideNav');
            $(".button-collapse").sideNav();
        }
    }]);
