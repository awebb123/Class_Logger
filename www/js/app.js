angular.module('cp', ['ionic', 'ngMaterial', 'ngAnimate', 'ngAria'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(() => {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
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
    });

<<<<<<< HEAD
});
=======
            .state('/settings', {
              url: '/settigs',
              templateUrl: './templates/pages/settings.html'
            })

            .state('/updateInfo', {
              url: '/updateInfo',
              templateUrl: './templates/pages/updateInfo.html'
            })

            .state('/updateInfoSuccess', {
              url: '/updateInfoSuccess',
              templateUrl: './templates/pages/updateInfoSuccess.html'
            })

            .state('/settings', {
              url: '/settigs',
              templateUrl: './templates/pages/settings.html'
            })

            .state('/updateInfo', {
              url: '/updateInfo',
              templateUrl: './templates/pages/updateInfo.html'
            })

            .state('/updateInfoSuccess', {
              url: '/updateInfoSuccess',
              templateUrl: './templates/pages/updateInfoSuccess.html'
            })

            .state('/resetPswd', {
              url: '/resetPswd',
              templateUrl: './templates/pages/resetPswd.html'
            })
>>>>>>> 47aacb4f232285a7c030a5c7ffc70b990e73e264


<<<<<<< HEAD
=======
            .state('/main', {
                url: '/main',
                templateUrl: './templates/pages/main.html'
            })

            .state('/about', {
                url: '/about',
                templateUrl: './templates/pages/about.html'
            });
    });
>>>>>>> 47aacb4f232285a7c030a5c7ffc70b990e73e264
