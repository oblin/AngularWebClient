webpackJsonp(["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var shop_component_1 = __webpack_require__("./ClientApp/app/shop/shop.component.ts");
var checkout_component_1 = __webpack_require__("./ClientApp/app/checkout/checkout.component.ts");
var login_component_1 = __webpack_require__("./ClientApp/app/login/login.component.ts");
var routes = [
    { path: '', component: shop_component_1.ShopComponent },
    { path: 'checkout', component: checkout_component_1.CheckoutComponent },
    { path: 'login', component: login_component_1.LoginComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { useHash: true, enableTracing: false })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Jagi Web Client �d���I';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./ClientApp/app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_routing_module_1 = __webpack_require__("./ClientApp/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./ClientApp/app/app.component.ts");
var product_list_component_1 = __webpack_require__("./ClientApp/app/shop/product-list.component.ts");
var data_service_1 = __webpack_require__("./ClientApp/app/shared/data.service.ts");
var cart_component_1 = __webpack_require__("./ClientApp/app/shop/cart.component.ts");
var shop_component_1 = __webpack_require__("./ClientApp/app/shop/shop.component.ts");
var checkout_component_1 = __webpack_require__("./ClientApp/app/checkout/checkout.component.ts");
var login_component_1 = __webpack_require__("./ClientApp/app/login/login.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                product_list_component_1.ProductListComponent,
                cart_component_1.CartComponent,
                shop_component_1.ShopComponent,
                checkout_component_1.CheckoutComponent,
                login_component_1.LoginComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [data_service_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./ClientApp/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    checkout works!\r\n</p>\r\n\r\n<button class=\"btn btn-success\" (click)=\"onCheckout()\">Complete Purchase</button>\r\n\r\n<a routerLink=\"/\" class=\"btn btn-info\">Cancel</a>"

/***/ }),

/***/ "./ClientApp/app/checkout/checkout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var data_service_1 = __webpack_require__("./ClientApp/app/shared/data.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(data, router) {
        this.data = data;
        this.router = router;
    }
    CheckoutComponent.prototype.onCheckout = function () {
        var _this = this;
        this.data.checkout()
            .subscribe(function (success) {
            if (success)
                _this.router.navigate([""]);
        });
    };
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent = __decorate([
        core_1.Component({
            selector: 'checkout',
            template: __webpack_require__("./ClientApp/app/checkout/checkout.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router])
    ], CheckoutComponent);
    return CheckoutComponent;
}());
exports.CheckoutComponent = CheckoutComponent;


/***/ }),

/***/ "./ClientApp/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 col-md-offset-4\">\r\n        <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n        <form (submit)=\"onLogin()\" #theForm=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Username</label>\r\n                <input type=\"text\" name=\"username\" class=\"form-control\" [(ngModel)]=\"creds.username\" #username=\"ngModel\" required />\r\n                <div class=\"text-danger\" *ngIf=\"username.touched && username.invalid && username.errors.required\">Username is Required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" name=\"password\" class=\"form-control\" #password=\"ngModel\" [(ngModel)]=\"creds.password\" />\r\n                <div class=\"text-danger\" *ngIf=\"password.touched && password.invalid && password.errors.required\">Username is Required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" [disabled]=\"theForm.isvalid\" />\r\n                <a routerLink=\"/\" class=\"btn btn-default\">Cancel</a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var data_service_1 = __webpack_require__("./ClientApp/app/shared/data.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.creds = {
            username: "",
            password: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.data.login(this.creds).subscribe(function (success) {
            if (success) {
                if (_this.data.order.Items.length == 0) {
                    _this.router.navigate([""]);
                }
                else {
                    _this.router.navigate(["checkout"]);
                }
            }
        }, function (err) { return _this.errorMessage = "�n�J����"; });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: __webpack_require__("./ClientApp/app/login/login.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./ClientApp/app/shared/Order.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
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


/***/ }),

/***/ "./ClientApp/app/shared/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var Order_1 = __webpack_require__("./ClientApp/app/shared/Order.ts");
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


/***/ }),

/***/ "./ClientApp/app/shop/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Shopping Cart</h3>\r\n<div>#/Items: {{ data.order.Items.length }}</div>\r\n<table class=\"table table-condensed table-hover\">\r\n    <tr>\r\n        <th>Product Id</th>\r\n        <th>Quantity</th>\r\n        <th>Price</th>\r\n        <th>Total</th>\r\n    </tr>\r\n    <tbody>\r\n        <tr *ngFor=\"let o of data.order.Items\">\r\n            <td>{{ o.ProductId }}</td>\r\n            <td>{{ o.Quantity }}</td>\r\n            <td>{{ o.UnitPrice | currency: \"TWD\" }}</td>\r\n            <td>{{ (o.UnitPrice * o.Quantitty) | currency: \"TWD\" }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<button class=\"btn btn-success\" \r\n   *ngIf=\"data.order.Items.length > 0\" (click)=\"onCheckOut()\">Checkout</button>"

/***/ }),

/***/ "./ClientApp/app/shop/cart.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var data_service_1 = __webpack_require__("./ClientApp/app/shared/data.service.ts");
var CartComponent = /** @class */ (function () {
    function CartComponent(data, router) {
        this.data = data;
        this.router = router;
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.prototype.onCheckOut = function () {
        if (this.data.loginRequired) {
            // Force login
            this.router.navigate(["login"]);
        }
        else {
            // Go to checkout
            this.router.navigate(["checkout"]);
        }
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'the-cart',
            template: __webpack_require__("./ClientApp/app/shop/cart.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;


/***/ }),

/***/ "./ClientApp/app/shop/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 well well-sm\" *ngFor=\"let p of products\">\r\n        <div><strong>{{ p.Title }}</strong></div>\r\n        <div><strong>{{ p.Price | currency: \"TWD\" }}</strong></div>\r\n        <button class=\"btn btn-success btn-sm pull-right\" (click)=\"addProduct(p)\">Buy</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/shop/product-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var data_service_1 = __webpack_require__("./ClientApp/app/shared/data.service.ts");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(data) {
        this.data = data;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadProducts()
            .subscribe(function (products) {
            _this.products = products;
        });
    };
    ProductListComponent.prototype.addProduct = function (product) {
        this.data.addToOrder(product);
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'product-list',
            template: __webpack_require__("./ClientApp/app/shop/product-list.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;


/***/ }),

/***/ "./ClientApp/app/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n        <h3>{{ title }}</h3>\r\n        <product-list></product-list>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <the-cart></the-cart>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/shop/shop.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ShopComponent = /** @class */ (function () {
    function ShopComponent() {
    }
    ShopComponent.prototype.ngOnInit = function () {
    };
    ShopComponent = __decorate([
        core_1.Component({
            selector: 'shop',
            template: __webpack_require__("./ClientApp/app/shop/shop.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ShopComponent);
    return ShopComponent;
}());
exports.ShopComponent = ShopComponent;


/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./ClientApp/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./ClientApp/app/app.module.ts");
var environment_1 = __webpack_require__("./ClientApp/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map