angular.module('cp', ['ngMaterial', 'ui.router'])

    .config(function($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/splash');

        $stateProvider

            .state('/splash', {
                url: '/splash',
                templateUrl: './templates/pages/splash.html'
            })

            .state('/login', {
               url: '/login', 
               templateUrl: './templates/pages/login.html'
            })

            .state('/signup', {
               url: '/signup',
               templateUrl: './templates/pages/signup.html' 
            });
    });
