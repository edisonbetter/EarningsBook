'use strict';
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicHistory, AllEarnings) {
  $ionicHistory.clearHistory();
  $scope.allEarnings = AllEarnings.all();
  $scope.config = {
    title: '',
    tooltips: true,
    labels: false,
    mouseover: function() {},
    mouseout: function() {},
    click: function() {},
    legend: {
      display: true, // can be either 'left' or 'right'.
      position: 'left',
      // you can have html in series name
      htmlEnabled: false
    },
    innerRadius: 12,
    colors: ['rgb(255,51,51)', 'rgb(44,160,44)']
  };
  $scope.cnyData = {
    series: ['Earnings'],
    data: [{
      x: 'Stock',
      y: [$scope.allEarnings.cnyStockEarnings],
      tooltip: 'Stock Earnings'
    },
    {
      x: 'Fund',
      y: [$scope.allEarnings.cnyFundEarnings],
      tooltip: 'Fund Earnings'
    }]
  };
  $scope.hkdData = {
    series: ['Earnings'],
    data: [{
      x: 'Stock',
      y: [$scope.allEarnings.hkdStockEarnings],
      tooltip: 'Stock Earnings'
    },
    {
      x: 'Fund',
      y: [$scope.allEarnings.hkdFundEarnings],
      tooltip: 'Fund Earnings'
    }]
  };
  $scope.allEarnings = AllEarnings.all();
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('StockEarningsCtrl', function($scope, $ionicHistory, $state, $stateParams, StockEarnings) {
  $scope.stockEarnings = [];
  $scope.stockEarning = StockEarnings.get($stateParams.stockEarningId);

  $scope.all = function() {
    $scope.stockEarnings = StockEarnings.all();
  };
  $scope.all();

  $scope.createAction = function() {
    $state.go('tab.stock-create');
  };
  $scope.create = function(stockEarning) {
    StockEarnings.create(stockEarning, function() {
      $scope.clear();
    });
    $ionicHistory.currentView($ionicHistory.backView());
    $state.go('tab.stock-detail', {
      'stockEarningId': stockEarning.id
    });
  };

  $scope.clear = function() {
    $scope.stockEarning = null;
  };
})

.controller('StockEarningDetailCtrl', function($scope, $state, $stateParams, $ionicPopup, StockEarnings) {
  $scope.stockEarning = StockEarnings.get($stateParams.stockEarningId);
  $scope.confirmDelete = function(){
    var confirmPopup = $ionicPopup.confirm({
    title: 'Confirm Delete',
    template: 'Are you sure you want to delete it?'
    });
    confirmPopup.then(function(res){
      if(res){
        StockEarnings.remove($scope.stockEarning);
        $state.go('tab.stock');
      }
    });
  };
  $scope.edit = function(stockEarning){
    $state.go('tab.stock-edit', {
      'stockEarningId': stockEarning.id
    });
  };
})

// .controller('StockEarningCreateCtrl', function($scope, StockEarnings){
//
// })
;
