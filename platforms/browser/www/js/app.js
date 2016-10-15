angular.module('cp', ['ionic', 'ngMaterial'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($urlRouterProvider, $stateProvider) {
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

})

	.config(function($mdThemingProvider) {

	});
