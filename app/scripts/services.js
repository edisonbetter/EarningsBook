'use strict';

var starter = angular.module('starter.services', [])
  .factory('StockProfits', function() {
    var stockProfits = [{
      id: 1,
      date: '2013-11-20T16:00:00.000Z',
      code: '1219',
      name: '天喔国际',
      quantity: 5000,
      amount: 1128.86,
      currency: 'HKD',
      profitability: 21.87,
      buyPrice: 10,
      sellPrice: 11,
      buyTransactionFee: 40,
      sellTransactionFee: 50.2,
      buyConsideration: 50000,
      sellConsideration: 60000
    }, {
      id: 2,
      date: '2013-11-27T16:00:00.000Z',
      code: '1316',
      name: '耐世特',
      quantity: 5000,
      amount: 1192.99,
      currency: 'HKD',
      profitability: 11.87,
      buyPrice: 30,
      sellPrice: 21,
      buyTransactionFee: 40,
      sellTransactionFee: 50.2,
      buyConsideration: 50000,
      sellConsideration: 60000
    }, {
      id: 3,
      date: '2013-12-02T16:00:00.000Z',
      code: '1515',
      name: '凤凰医疗',
      quantity: 5000,
      amount: 934.43,
      currency: 'HKD',
      profitability: 31.87,
      buyPrice: 40,
      sellPrice: 31,
      buyTransactionFee: 40,
      sellTransactionFee: 50.2,
      buyConsideration: 50000,
      sellConsideration: 60000
    }, {
      id: 4,
      date: '2013-12-04',
      code: '3315',
      name: '金邦达宝嘉',
      quantity: 5000,
      amount: 1405.11,
      currency: 'HKD',
      profitability: 6.87,
      buyPrice: 50,
      sellPrice: 41,
      buyTransactionFee: 40,
      sellTransactionFee: 50.2,
      buyConsideration: 50000,
      sellConsideration: 60000
    }, {
      id: 5,
      date: '2013-12-05T16:00:00.000Z',
      code: '484',
      name: '云游控股',
      quantity: 5000,
      amount: 254.16,
      currency: 'HKD',
      profitability: -9.87,
      buyPrice: 60,
      sellPrice: 51,
      buyTransactionFee: 40,
      sellTransactionFee: 50.2,
      buyConsideration: 50000,
      sellConsideration: 60000
    }, {
      id: 6,
      date: '2013-12-11T16:00:00.000Z',
      code: '1862',
      name: '景瑞控股',
      quantity: 5000,
      amount: -503.17,
      currency: 'HKD',
      profitability: -10.7,
      buyPrice: 80,
      sellPrice: 61,
      buyTransactionFee: 40,
      sellTransactionFee: 50.2,
      buyConsideration: 50000,
      sellConsideration: 60000
    }, {
      id: 7,
      date: '2013-12-12T16:00:00.000Z',
      code: '1359',
      name: '中国信达资产管理',
      quantity: 5000,
      amount: 885.54,
      currency: 'HKD',
      profitability: 2.87,
      buyPrice: 60,
      sellPrice: 71,
      buyTransactionFee: 40,
      sellTransactionFee: 50.2,
      buyConsideration: 50000,
      sellConsideration: 60000
    }];

    var idCounter = 8;

    function calculateEarning(stockProfit) {
      var profit = (stockProfit.sellPrice - stockProfit.buyPrice) * stockProfit.quantity;
      var buyConsideration = stockProfit.buyPrice * stockProfit.quantity;
      var sellConsideration = stockProfit.sellPrice * stockProfit.quantity;
      var cost = buyConsideration;
      if (null !== stockProfit.buyTransactionFee) {
        profit = profit - stockProfit.buyTransactionFee;
        buyConsideration = buyConsideration + stockProfit.buyTransactionFee;
        cost = buyConsideration;
      }
      if (null !== stockProfit.sellTransactionFee) {
        profit = profit - stockProfit.sellTransactionFee;
        sellConsideration = sellConsideration - stockProfit.sellTransactionFee;
        cost = cost + stockProfit.sellTransactionFee;
      }
      stockProfit.amount = profit.toFixed(2);
      var earningRate = profit / cost * 100;
      stockProfit.profitability = earningRate.toFixed(2);
      stockProfit.buyConsideration = buyConsideration.toFixed(2);
      stockProfit.sellConsideration = sellConsideration.toFixed(2);
    }
    return {
      all: function() {
        return stockProfits;
      },
      remove: function(stockProfit) {
        stockProfits.splice(stockProfits.indexOf(stockProfit), 1);
      },
      create: function(stockProfit) {
        if (!stockProfit.hasOwnProperty('id')) {
          stockProfit.id = idCounter;
          calculateEarning(stockProfit);
          stockProfits.push(stockProfit);
          idCounter = idCounter + 1;
        }
        return stockProfit;
      },
      get: function(stockProfitId) {
        for (var i = 0; i < stockProfits.length; i++) {
          if (stockProfits[i].id === parseInt(stockProfitId)) {
            return stockProfits[i];
          }
        }
        return null;
      }
    };
  });

starter.factory('FundProfits', function() {
  var fundProfits = [{
      id: 1,
      date: '2015-03-25T16:00:00.000Z',
      code: 'F3316',
      name: '银河主题策略',
      quantity: 5000,
      amount: 17707,
      currency: 'CNY',
      profitability: 29.51,
      buyPrice: 30,
      sellPrice: 21,
      buyTransactionFee: 40,
      sellTransactionFee: 50.2,
      buyConsideration: 50000,
      sellConsideration: 60000
    },
    // {
    //   id: 2,
    //   date: '2015-05-14T16:00:00.000Z',
    //   code: 'F3316',
    //   name: '银河主题策略',
    //   quantity: 5000,
    //   amount: 1674.14,
    //   currency: 'CNY',
    //   profitability: 13.39,
    //   buyPrice: 30,
    //   sellPrice: 21,
    //   buyTransactionFee: 40,
    //   sellTransactionFee: 50.2,
    //   buyConsideration: 50000,
    //   sellConsideration: 60000
    // },
    {
      id: 3,
      date: '2015-05-22T16:00:00.000Z',
      code: 'F1515',
      name: '银河定投宝',
      quantity: 5000,
      amount: 2116.9,
      currency: 'CNY',
      profitability: 21.17,
      buyPrice: 40,
      sellPrice: 31,
      buyTransactionFee: 40,
      sellTransactionFee: 50.2,
      buyConsideration: 50000,
      sellConsideration: 60000
    }, {
      id: 4,
      date: '2013-12-04T16:00:00.000Z',
      code: 'F3315',
      name: '汇添富移动互联网',
      quantity: 5117.61,
      amount: 4764,
      currency: 'CNY',
      profitability: 37.67,
      buyPrice: 2.469,
      sellPrice: 3.399,
      buyTransactionFee: 0,
      sellTransactionFee: 0,
      buyConsideration: 50000,
      sellConsideration: 60000
    }, {
      id: 5,
      date: '2015-05-22T16:00:00.000Z',
      code: 'F484',
      name: '银河服务混合',
      quantity: 5000,
      amount: 1881.46,
      currency: 'CNY',
      profitability: 10.7,
      buyPrice: 60,
      sellPrice: 51,
      buyTransactionFee: 40,
      sellTransactionFee: 50.2,
      buyConsideration: 50000,
      sellConsideration: 60000
    }, {
      id: 6,
      date: '2015-05-22T16:00:00.000Z',
      code: 'F484',
      name: '嘉实新消费',
      quantity: 5000,
      amount: 5079,
      currency: 'CNY',
      profitability: 25.39,
      buyPrice: 60,
      sellPrice: 51,
      buyTransactionFee: 40,
      sellTransactionFee: 50.2,
      buyConsideration: 50000,
      sellConsideration: 60000
    }, {
      id: 7,
      date: '2015-05-22T16:00:00.000Z',
      code: 'F484',
      name: '嘉实研究精选',
      quantity: 5000,
      amount: 2989,
      currency: 'CNY',
      profitability: 26.12,
      buyPrice: 60,
      sellPrice: 51,
      buyTransactionFee: 40,
      sellTransactionFee: 50.2,
      buyConsideration: 50000,
      sellConsideration: 60000
    }, {
      id: 8,
      date: '2015-05-22T16:00:00.000Z',
      code: 'F484',
      name: '嘉实增长混合',
      quantity: 5000,
      amount: 5690,
      currency: 'CNY',
      profitability: 39.25,
      buyPrice: 60,
      sellPrice: 51,
      buyTransactionFee: 40,
      sellTransactionFee: 50.2,
      buyConsideration: 50000,
      sellConsideration: 60000
    }
  ];

  var idCounter = 6;

  function calculateEarning(fundProfit) {
    var profit = fundProfit.sellConsideration - fundProfit.buyConsideration;
    var cost = fundProfit.buyConsideration;
    if (null !== fundProfit.buyTransactionFee) {
      profit = profit - fundProfit.buyTransactionFee;
      cost = cost + fundProfit.buyTransactionFee;
    }
    if (null !== fundProfit.sellTransactionFee) {
      profit = profit - fundProfit.sellTransactionFee;
      cost = cost + fundProfit.sellTransactionFee;
    }

    fundProfit.profit = profit.toFixed(2);
    var profitability = profit / cost * 100;
    fundProfit.profitability = profitability.toFixed(2);
  }
  return {
    all: function() {
      return fundProfits;
    },
    remove: function(fundProfit) {
      fundProfits.splice(fundProfits.indexOf(fundProfit), 1);
    },
    create: function(fundProfit) {
      if (!fundProfit.hasOwnProperty('id')) {
        fundProfit.id = idCounter;
        calculateEarning(fundProfit);
        fundProfits.push(fundProfit);
        idCounter = idCounter + 1;
      }
    },
    get: function(fundProfitId) {
      for (var i = 0; i < fundProfits.length; i++) {
        if (fundProfits[i].id === parseInt(fundProfitId)) {
          return fundProfits[i];
        }
      }
      return null;
    }
  };
});

starter.factory('ProfitSummary', function() {
  var profitSummary = {
    hkdProfits: 20030,
    hkdStockProfits: 14030,
    hkdFundProfits: 6000,
    hkdBestStockProfitID: 1,
    hkdBestStockProfitCode: '1219',
    hkdBestStockProfitName: '天喔国际',
    hkdBestStockProfitAmount: 1128.86,
    hkdBestStockProfitProfitability: 21.87,
    hkdBestStockProfitDate: '2015-05-20',
    hkdBestFundProfitID: 1,
    hkdBestFundProfitCode: '00330',
    hkdBestFundProfitName: '嘉实混合策略',
    hkdBestFundProfitAmount: 21128.86,
    hkdBestFundProfitProfitability: 41.55,
    hkdBestFundDate: '2015-05-21',
    cnyProfits: 30202,
    cnyStockProfits: 3502,
    cnyFundProfits: 26700,
    cnyBestStockProfitID: 1,
    cnyBestStockProfitCode: '1219',
    cnyBestStockProfitName: '天喔国际',
    cnyBestStockProfitAmount: 1128.86,
    cnyBestStockProfitProfitability: 21.87,
    cnyBestStockProfitDate: '2015-05-20',
    cnyBestFundProfitID: 1,
    cnyBestFundProfitCode: '00330',
    cnyBestFundProfitName: '嘉实混合策略',
    cnyBestFundProfitAmount: 21128.86,
    cnyBestFundProfitProfitability: 41.55,
    cnyBestFundProfitDate: '2015-05-21',
  };

  function addProfit(profitSummary, profit) {
    if ('HKD' === profit.currency) {
      profitSummary.hkdProfits = profitSummary.hkdProfits + profit.amount;
      if ('Stock' === profit.securityType) {
        profitSummary.hkdStockProfits = profitSummary.hkdStockProfits + profit.amount;
        if (profit.profitability > profitSummary.hkdBestStockProfitProfitability) {
          profitSummary.hkdBestStockProfitID = profit.id;
          profitSummary.hkdBestStockProfitCode = profit.code;
          profitSummary.hkdBestStockProfitName = profit.name;
          profitSummary.hkdBestStockProfitDate = profit.date;
          profitSummary.hkdBestStockProfitAmount = profit.amount;
          profitSummary.hkdBestStockProfitProfitability = profit.profitability;
        }
      } else if ('Fund' === profit.securityType) {
        profitSummary.hkdFundProfits = profitSummary.hkdFundProfits + profit.amount;
        if (profit.profitability > profitSummary.hkdBestFundProfitProfitability) {
          profitSummary.hkdBestFundProfitID = profit.id;
          profitSummary.hkdBestFundProfitCode = profit.code;
          profitSummary.hkdBestFundProfitName = profit.name;
          profitSummary.hkdBestFundProfitDate = profit.date;
          profitSummary.hkdBestFundProfitAmount = profit.amount;
          profitSummary.hkdBestFundProfitProfitability = profit.profitability;
        }
      }
    } else if ('CNY' === profit.currency) {
      profitSummary.cnyProfits = profitSummary.cnyProfits + profit.amount;
      if ('Stock' === profit.securityType) {
        profitSummary.cnyStockProfits = profitSummary.cnyStockProfits + profit.amount;
        if (profit.profitability > profitSummary.cnyBestStockProfitProfitability) {
          profitSummary.cnyBestStockProfitID = profit.id;
          profitSummary.cnyBestStockProfitCode = profit.code;
          profitSummary.cnyBestStockProfitName = profit.name;
          profitSummary.cnyBestStockProfitDate = profit.date;
          profitSummary.cnyBestStockProfitAmount = profit.amount;
          profitSummary.cnyBestStockProfitProfitability = profit.profitability;
        }
      } else if ('Fund' === profit.securityType) {
        profitSummary.cnyFundProfits = profitSummary.cnyFundProfits + profit.amount;
        if (profit.profitability > profitSummary.cnyBestFundProfitProfitability) {
          profitSummary.cnyBestFundProfitID = profit.id;
          profitSummary.cnyBestFundProfitCode = profit.code;
          profitSummary.cnyBestFundProfitName = profit.name;
          profitSummary.cnyBestFundProfitDate = profit.date;
          profitSummary.cnyBestFundProfitAmount = profit.amount;
          profitSummary.cnyBestFundProfitProfitability = profit.profitability;
        }
      }
    }
  }

  function rollbackProfit(profitSummary, oldProfit) {
    if ('HKD' === oldProfit.currency) {
      profitSummary.hkdProfits = profitSummary.hkdProfits - oldProfit.amount;
      if ('Stock' === oldProfit.securityType) {
        profitSummary.hkdStockProfits = profitSummary.hkdStockProfits - oldProfit.amount;
      } else if ('Fund' === oldProfit.securityType) {
        profitSummary.hkdFundProfits = profitSummary.hkdFundProfits - oldProfit.amount;
      }
    } else if ('CNY' === oldProfit.currency) {
      profitSummary.cnyProfits = profitSummary.cnyProfits - oldProfit.amount;
      if ('Stock' === oldProfit.securityType) {
        profitSummary.cnyStockProfits = profitSummary.cnyStockProfits - oldProfit.amount;
      } else if ('Fund' === oldProfit.securityType) {
        profitSummary.cnyFundProfits = profitSummary.cnyFundProfits - oldProfit.amount;
      }
    }
  }

  return {
    all: function() {
      return profitSummary;
    },
    update: function(oldProfit, newProfit) {
      rollbackProfit(profitSummary, oldProfit);
      addProfit(profitSummary, newProfit);
    },
    save: function(profit) {
      addProfit(profitSummary, profit);
    }
  };
});

// starter.factory('PouchDBListener', ['', function(){
//   var localDB = new PouchDB('EarningsBook');
// }]);

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
  }, {
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
