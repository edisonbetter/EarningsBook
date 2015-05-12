'use strict';
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, AllEarnings) {
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

.controller('StockEarningsCtrl', function($scope, $ionicHistory, $state, StockEarnings){
  $scope.stockEarnings = [];

  $scope.all = function(){
    $scope.stockEarnings = StockEarnings.all();
  };
  $scope.all();

  $scope.createAction = function(){
    $state.go('tab.stock-create');
  };
  $scope.create = function(stockEarning){
    StockEarnings.create(stockEarning, function(){
      $scope.clear();
      //$state.go('tab.stock');
    });
    $ionicHistory.currentView($ionicHistory.backView());
    $state.go('tab.stock-detail', {'stockEarningId':stockEarning.id});
  };

  $scope.clear = function () {
    $scope.stockEarning = null;
  };
})

.controller('StockEarningDetailCtrl', function($scope, $stateParams, StockEarnings){
  $scope.stockEarning = StockEarnings.get($stateParams.stockEarningId);
})

// .controller('StockEarningCreateCtrl', function($scope, StockEarnings){
//
// })
;
