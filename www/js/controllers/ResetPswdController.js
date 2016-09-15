angular.module('cp')
    .controller('ResetPswdCtrl', ['$scope', function($scope) {
        console.log('ResetPswdCtrl here');

        $scope.sideNav = function() {
            console.log('SideNav');
            $(".button-collapse").sideNav();
        };

        $scope.user = {
            email: ""
        };
    }]);
