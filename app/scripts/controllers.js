'use strict';
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $state) {
  $scope.create = function(){
    $state.go('tab.stock-create');
  };
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

.controller('StockEarningsCtrl', function($scope, StockEarnings){
  $scope.stockEarnings = StockEarnings.all();
})

.controller('StockEarningDetailCtrl', function($scope, $stateParams, StockEarnings){
  $scope.stockEarning = StockEarnings.get($stateParams.stockEarningId);
})

.controller('StockEarningCreateCtrl', function($scope, StockEarnings){
  $scope.create = function(){
    $scope.stockEarning = StockEarnings.create();
  };
})
;
