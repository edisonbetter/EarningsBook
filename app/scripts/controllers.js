'use strict';
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicHistory, ProfitSummary) {
  $ionicHistory.clearHistory();
  $scope.profitSummary = ProfitSummary.all();
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
      y: [$scope.profitSummary.cnyStockProfits],
      tooltip: 'Stock Profits'
    },
    {
      x: 'Fund',
      y: [$scope.profitSummary.cnyFundProfits],
      tooltip: 'Fund Profits'
    }]
  };
  $scope.hkdData = {
    series: ['Earnings'],
    data: [{
      x: 'Stock',
      y: [$scope.profitSummary.hkdStockProfits],
      tooltip: 'Stock Earnings'
    },
    {
      x: 'Fund',
      y: [$scope.profitSummary.hkdFundProfits],
      tooltip: 'Fund Earnings'
    }]
  };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('StockProfitsCtrl', function($scope, $ionicHistory, $state, $stateParams, StockProfits, ProfitSummary) {
  $scope.stockProfits = [];
  $scope.stockProfit = StockProfits.get($stateParams.stockProfitId);

  $scope.all = function() {
    $scope.stockProfits = StockProfits.all();
  };
  $scope.all();

  $scope.createAction = function() {
    $state.go('tab.stockProfitCreate');
  };
  $scope.create = function(stockProfit) {
    stockProfit.securityType = 'Stock';
    StockProfits.create(stockProfit);
    ProfitSummary.update(stockProfit);
    $ionicHistory.currentView($ionicHistory.backView());
    $state.go('tab.stockProfitDetail', {
      'stockProfitId': stockProfit.id
    });
    $scope.clear();
  };

  $scope.clear = function() {
    $scope.stockProfit = null;
  };
})

.controller('StockProfitDetailCtrl', function($scope, $state, $stateParams, $ionicPopup, StockProfits) {
  $scope.stockProfit = StockProfits.get($stateParams.stockProfitId);
  $scope.confirmDelete = function(){
    var confirmPopup = $ionicPopup.confirm({
    title: 'Confirm Delete',
    template: 'Are you sure you want to delete it?'
    });
    confirmPopup.then(function(res){
      if(res){
        StockProfits.remove($scope.stockProfit);
        $state.go('tab.stockProfits');
      }
    });
  };
  $scope.edit = function(stockProfit){
    $state.go('tab.stockProfitEdit', {
      'stockProfitId': stockProfit.id
    });
  };
})
.controller('FundProfitsCtrl', function($scope, $ionicHistory, $state, $stateParams, FundProfits) {
  $scope.fundProfits = [];
  $scope.fundProfit = FundProfits.get($stateParams.fundProfitId);

  $scope.all = function() {
    $scope.fundProfits = FundProfits.all();
  };
  $scope.all();

  $scope.createAction = function() {
    $state.go('tab.fundProfitCreate');
  };
  $scope.create = function(fundProfit) {
    fundProfit.securityType = 'Fund';
    FundProfits.create(fundProfit, function() {
      $scope.clear();
    });
    $ionicHistory.currentView($ionicHistory.backView());
    $state.go('tab.fundProfitDetail', {
      'fundProfitId': fundProfit.id
    });
  };

  $scope.clear = function() {
    $scope.fundProfit = null;
  };
})

.controller('FundProfitDetailCtrl', function($scope, $state, $stateParams, $ionicPopup, FundProfits) {
  $scope.fundProfit = FundProfits.get($stateParams.fundProfitId);
  $scope.confirmDelete = function(){
    var confirmPopup = $ionicPopup.confirm({
    title: 'Confirm Delete',
    template: 'Are you sure you want to delete it?'
    });
    confirmPopup.then(function(res){
      if(res){
        FundProfits.remove($scope.fundProfit);
        $state.go('tab.fundProfits');
      }
    });
  };
  $scope.edit = function(fundProfit){
    $state.go('tab.fundProfitEdit', {
      'fundProfitId': fundProfit.id
    });
  };
})
;
