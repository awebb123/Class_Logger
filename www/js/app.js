angular.module('cp', ['ionic', 'ngMaterial', 'ngAnimate', 'ngAria'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(() => {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(($urlRouterProvider, $stateProvider) => {
        $urlRouterProvider.otherwise('/splash');

        $stateProvider

            .state('/splash', {
                url: '/splash',
                templateUrl: './templates/pages/splash.html',
                templateStyle: './css/pages/splash.css'
            })

            .state('/signup', {
                url: '/signup',
                templateUrl: './templates/pages/signup.html',
                templateStyle: './css/pages/signup.css'

            })

            .state('/login', {
                url: '/login',
                templateUrl: './templates/pages/login.html',
                templateStyle: './css/pages/login.css'
            })

            .state('/dashboard', {
                url: '/dashboard',
                templateUrl: './templates/pages/dashboard.html',
                templateStyles: './css/pages/dashboard.css'
            })

    }).config(($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
        .primaryPalette('green', {
            'default': '700',
            'hue-1': '100',
            'hue-2': '600',
            'hue-3': 'A100'
        })
        .accentPalette('purple', {
            'default': '200'
        });
});


