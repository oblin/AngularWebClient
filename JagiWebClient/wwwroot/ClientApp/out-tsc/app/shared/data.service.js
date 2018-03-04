"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
var Order_1 = require("./Order");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.token = "";
        this.order = new Order_1.Order();
        this.products = [];
    }
    Object.defineProperty(DataService.prototype, "loginRequired", {
        get: function () {
            return this.token.length == 0 || this.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post("/account/createtoken", creds)
            .map(function (response) {
            var tokenInfo = response;
            _this.token = tokenInfo.token;
            _this.tokenExpiration = tokenInfo.expiration;
            return true;
        });
    };
    DataService.prototype.checkout = function () {
        var _this = this;
        var header = new http_1.HttpHeaders().set("Authorization", "Bearer " + this.token);
        return this.http.post("api/Products", this.order, { headers: header })
            .map(function (response) {
            _this.order = new Order_1.Order();
            return true;
        });
    };
    DataService.prototype.loadProducts = function () {
        return this.http.get("/api/products");
    };
    DataService.prototype.addToOrder = function (product) {
        var item = this.order.Items.find(function (i) { return i.ProductId == product.Id; });
        if (item) {
            item.Quantity++;
        }
        else {
            item = new Order_1.OrderItem();
            item.ProductId = product.Id;
            item.UnitPrice = product.Price;
            item.Quantity = 1;
            this.order.Items.push(item);
        }
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map