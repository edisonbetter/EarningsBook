'use strict';

var starter = angular.module('starter.services', [])
.factory('StockEarnings', function(){
  var stockEarnings = [{ id:1, date: '2013-11-20', code:'1219', name:'天喔国际', quantity:5000, profit:1128.86, currency:'HKD', earningRate:21.87, buyPrice:10, sellPrice:11, buyTransactionFee:40, sellTransactionFee:50.2, buyConsideration:50000, sellConsideration:60000},
  { id:2, date: '2013-11-27', code:'1316', name:'耐世特', quantity:5000, profit:1192.99, currency:'HKD', earningRate:11.87, buyPrice:30, sellPrice:21,buyTransactionFee:40, sellTransactionFee:50.2, buyConsideration:50000, sellConsideration:60000},
  { id:3, date: '2013-12-02', code:'1515', name:'凤凰医疗', quantity:5000, profit:934.43, currency:'HKD', earningRate:31.87, buyPrice:40, sellPrice:31, buyTransactionFee:40, sellTransactionFee:50.2, buyConsideration:50000, sellConsideration:60000},
  { id:4, date: '2013-12-04', code:'3315', name:'金邦达宝嘉', quantity:5000, profit:1405.11, currency:'HKD', earningRate:6.87, buyPrice:50, sellPrice:41, buyTransactionFee:40, sellTransactionFee:50.2, buyConsideration:50000, sellConsideration:60000},
  { id:5, date: '2013-12-05', code:'484', name:'云游控股', quantity:5000, profit:254.16, currency:'HKD', earningRate:-9.87, buyPrice:60, sellPrice:51, buyTransactionFee:40, sellTransactionFee:50.2, buyConsideration:50000, sellConsideration:60000},
  { id:6, date: '2013-12-11', code:'1862', name:'景瑞控股', quantity:5000, profit:-503.17, currency:'HKD', earningRate:-10.7, buyPrice:80, sellPrice:61, buyTransactionFee:40, sellTransactionFee:50.2, buyConsideration:50000, sellConsideration:60000},
  { id:7, date: '2013-12-12', code:'1359', name:'中国信达资产管理', quantity:5000, profit:885.54, currency:'HKD', earningRate:2.87, buyPrice:60, sellPrice:71, buyTransactionFee:40, sellTransactionFee:50.2, buyConsideration:50000, sellConsideration:60000}];

  var idCounter = 8;
  function calculateEarning(stockEarning){
    var profit = (stockEarning.sellPrice - stockEarning.buyPrice) * stockEarning.quantity;
    var buyConsideration = stockEarning.buyPrice * stockEarning.quantity;
    var sellConsideration = stockEarning.sellPrice * stockEarning.quantity;
    var cost = buyConsideration;
    if(null !== stockEarning.buyTransactionFee){
      profit = profit - stockEarning.buyTransactionFee;
      buyConsideration = buyConsideration + stockEarning.buyTransactionFee;
      cost = buyConsideration;
    }
    if(null !== stockEarning.sellTransactionFee){
      profit = profit - stockEarning.sellTransactionFee;
      sellConsideration = sellConsideration - stockEarning.sellTransactionFee;
      cost = cost + stockEarning.sellTransactionFee;
    }
    stockEarning.profit = profit;
    var earningRate = profit/cost * 100;
    stockEarning.earningRate = earningRate.toFixed(2);
    stockEarning.buyConsideration = buyConsideration;
    stockEarning.sellConsideration = sellConsideration;
  }
  return {
    all: function() {
      return stockEarnings;
    },
    remove: function(stockEarning) {
      stockEarnings.splice(stockEarnings.indexOf(stockEarning), 1);
    },
    create: function(stockEarning){
      stockEarning.id = idCounter;
      calculateEarning(stockEarning);
      stockEarnings.push(stockEarning);
      idCounter = idCounter + 1;
    },
    get: function(stockEarningId) {
      for (var i = 0; i < stockEarnings.length; i++) {
        if (stockEarnings[i].id === parseInt(stockEarningId)) {
          return stockEarnings[i];
        }
      }
      return null;
    }
  };
});

starter.factory('AllEarnings', function(){
  var allEarnings = {hkdEarnings:20030, hkdStockEarnings:14030, hkdFundEarnings:6000, cnyEarnings:30202, cnyStockEarnings:3502, cnyFundEarnings:26700};
  return {
    all: function(){
      return allEarnings;
    }
  };
});

starter.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
