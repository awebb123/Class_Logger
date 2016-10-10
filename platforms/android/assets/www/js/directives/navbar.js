angular.module('cp')

  .directive('navBar', () => {
    return {
      restrict: 'E',
      templateUrl: '../../templates/components/nav_component.html'
    }
});

