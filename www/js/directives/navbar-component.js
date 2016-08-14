angular.module('cp')

    .directive('navBar', function () {
        return {
            restrict: 'E',
            templateUrl: '../../templates/components/navbar-component.html'
        }
    });