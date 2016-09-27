(function () {
'use strict';
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service ('ShoppingListCheckOffService', ShoppingListCheckOffService);
// LIST #1 - controller
ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var tobuyShopping = this;
  tobuyShopping.items = ShoppingListCheckOffService.get_buy_Items();
  tobuyShopping.buy_Item = function (itemIndex) {
      ShoppingListCheckOffService.buy_Item(itemIndex);
  }
}
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var AlreadyBoughtShopping = this;
  var service = ShoppingListCheckOffService;
  AlreadyBoughtShopping.items = ShoppingListCheckOffService.get_bought_Items();
  AlreadyBoughtShopping.unbuy_Item = function (itemIndex) {
      ShoppingListCheckOffService.unbuy_Item(itemIndex);
  }}

function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items
  var to_buy_items = [
    { name: "Watch",
    quantity: 5 },
    { name: "Jewel",
    quantity: 3 },
    { name: "Necklace",
    quantity: 8 },
    { name: "Bracelet",
    quantity: 6 },
    { name: "Ear ring",
    quantity: 8 },
    { name: "Ring",
    quantity: 2 },
  ];
  var bought_items = [];

 service.buy_Item = function (itemIdex) {
    var item = to_buy_items.splice(itemIdex, 1);
    bought_items.push(item);
  };

  service.unbuy_Item = function (itemIdex) {
    var item = bought_items.splice(itemIdex, 1);
    to_buy_items.push(item);
  };

  service.get_bought_Items = function () {
    return bought_items;
  };

   service.get_buy_Items = function () {
     return to_buy_items;
   };
}

})();
