"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Order = /** @class */ (function () {
    function Order() {
        // 設定預設的日期方便後續存取
        this.OrderDate = new Date();
        // 設定預設的陣列後續存取就不用在另外產生
        this.Items = new Array();
    }
    Order.prototype.Subtotal = function () {
        return _.sum(_.map(this.Items, function (i) { return i.UnitPrice * i.Quantity; }));
    };
    return Order;
}());
exports.Order = Order;
var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    return OrderItem;
}());
exports.OrderItem = OrderItem;
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=Order.js.map