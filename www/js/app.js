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
            })

            .state('/dash', {
               url: '/dash',
               templateUrl: './templates/pages/dash.html'
            })

            .state('/account', {
              url: '/account',
              templateUrl: './templates/pages/account.html'
            })

            .state('/resetPswd', {
              url: '/resetPswd',
              templateUrl: './templates/pages/resetPswd.html'
            })

            .state('/resetPswdLink', {
              url: '/resetPswdLink',
              templateUrl: './templates/pages/resetPswdLink'
            })

            .state('/main', {
                url:'/main',
                templateUrl: './templates/pages/main.html'
            });
    });
