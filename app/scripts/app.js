'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'angularCharts'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })
    // Stock Profits start
    .state('tab.stockProfits', {
      url: '/stockProfits',
      views: {
        'tab-stockProfits': {
          templateUrl: 'templates/tab-stock-profits.html',
          controller: 'StockProfitsCtrl'
        }
      }
    })
    .state('tab.stockProfitDetail', {
      url: '/stockProfits/:stockProfitId',
      views: {
        'tab-stockProfits': {
          templateUrl: 'templates/stock-profit-detail.html',
          controller: 'StockProfitDetailCtrl'
        }
      }
    })
    .state('tab.stockProfitCreate', {
      url: '/stockProfits/new',
      views: {
        'tab-stockProfits': {
          templateUrl: 'templates/stock-profit-create.html',
          controller: 'StockProfitsCtrl'
        }
      }
    })
    .state('tab.stockProfitEdit', {
      url: '/stockProfits/edit/:stockProfitId',
      views: {
        'tab-stockProfits': {
          templateUrl: 'templates/stock-profit-create.html',
          controller: 'StockProfitsCtrl'
        }
      }
    })
    // Stock Profits end
    // Fund Profits start
    .state('tab.fundProfits', {
      url: '/fundProfits',
      views: {
        'tab-fundProfits': {
          templateUrl: 'templates/tab-fund-profits.html',
          controller: 'FundProfitsCtrl'
        }
      }
    })
    .state('tab.fundProfitDetail', {
      url: '/fundProfits/:fundProfitId',
      views: {
        'tab-fundProfits': {
          templateUrl: 'templates/fund-profit-detail.html',
          controller: 'FundProfitDetailCtrl'
        }
      }
    })
    .state('tab.fundProfitCreate', {
      url: '/fundProfits/new',
      views: {
        'tab-fundProfits': {
          templateUrl: 'templates/fund-profit-create.html',
          controller: 'FundProfitsCtrl'
        }
      }
    })
    .state('tab.fundProfitEdit', {
      url: '/fundProfits/edit/:fundProfitId',
      views: {
        'tab-fundProfits': {
          templateUrl: 'templates/fund-profit-create.html',
          controller: 'FundProfitsCtrl'
        }
      }
    })
    // Fund Profits end
    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

})

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.backButton.previousTitleText(false).text('');
})
;
