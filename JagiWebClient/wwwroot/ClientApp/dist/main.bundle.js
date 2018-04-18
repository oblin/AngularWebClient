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
var product_component_1 = __webpack_require__("./ClientApp/app/shop/product.component.ts");
var routes = [
    { path: '', component: shop_component_1.ShopComponent },
    { path: 'checkout', component: checkout_component_1.CheckoutComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'product', component: product_component_1.ProductComponent }
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var globals_service_1 = __webpack_require__("./ClientApp/app/core/globals.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(global, elementRef) {
        this.global = global;
        this.elementRef = elementRef;
        this.title = 'Jagi Web Client �d���I';
    }
    AppComponent.prototype.ngOnInit = function () {
        var value = this.elementRef.nativeElement.getAttribute('model');
        this.global.razorModel = value;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./ClientApp/app/app.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [globals_service_1.Globals, core_1.ElementRef])
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
// ngx-bootstraps
var modal_1 = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
var datepicker_1 = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
var tooltip_1 = __webpack_require__("./node_modules/ngx-bootstrap/tooltip/index.js");
var chronos_1 = __webpack_require__("./node_modules/ngx-bootstrap/chronos/index.js");
var locale_1 = __webpack_require__("./node_modules/ngx-bootstrap/locale.js");
chronos_1.defineLocale('zh-cn', locale_1.zhCnLocale);
var app_routing_module_1 = __webpack_require__("./ClientApp/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./ClientApp/app/app.component.ts");
var product_list_component_1 = __webpack_require__("./ClientApp/app/shop/product-list.component.ts");
var cart_component_1 = __webpack_require__("./ClientApp/app/shop/cart.component.ts");
var shop_component_1 = __webpack_require__("./ClientApp/app/shop/shop.component.ts");
var checkout_component_1 = __webpack_require__("./ClientApp/app/checkout/checkout.component.ts");
var login_component_1 = __webpack_require__("./ClientApp/app/login/login.component.ts");
var product_component_1 = __webpack_require__("./ClientApp/app/shop/product.component.ts");
var faicon_directive_1 = __webpack_require__("./ClientApp/app/core/faicon.directive.ts");
var form_group_component_1 = __webpack_require__("./ClientApp/app/core/form-group.component.ts");
var validate_span_component_1 = __webpack_require__("./ClientApp/app/core/validate-span.component.ts");
var confirm_component_1 = __webpack_require__("./ClientApp/app/core/confirm.component.ts");
// Services
var data_service_1 = __webpack_require__("./ClientApp/app/shared/data.service.ts");
var globals_service_1 = __webpack_require__("./ClientApp/app/core/globals.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule(localeService) {
        this.localeService = localeService;
        localeService.use("zh-cn");
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                product_list_component_1.ProductListComponent,
                cart_component_1.CartComponent,
                shop_component_1.ShopComponent,
                checkout_component_1.CheckoutComponent,
                login_component_1.LoginComponent,
                product_component_1.ProductComponent,
                faicon_directive_1.FaIconDirective,
                form_group_component_1.FormGroupComponent,
                validate_span_component_1.ValidateSpanComponent,
                confirm_component_1.ConfirmComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                modal_1.ModalModule.forRoot(),
                datepicker_1.BsDatepickerModule.forRoot(),
                tooltip_1.TooltipModule.forRoot()
            ],
            providers: [data_service_1.DataService, globals_service_1.Globals],
            entryComponents: [confirm_component_1.ConfirmComponent],
            bootstrap: [app_component_1.AppComponent]
        }),
        __metadata("design:paramtypes", [datepicker_1.BsLocaleService])
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

/***/ "./ClientApp/app/core/confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{title}}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <h3>{{description}}</h3>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\">確認</button>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">{{closeBtnName}}</button>\r\n</div> "

/***/ }),

/***/ "./ClientApp/app/core/confirm.component.ts":
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
var modal_1 = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/**
 * ������ܽT�{���u�������A
 * �ϥΤ覡�G
     confirmDelete() {
        const initialState = {
            title: "�T�{�R��",
            description: "�нT�{�O�_�R��",
            action: this.deleting // callback method
        };
        this.modalRef = this.modalService.show(ConfirmComponent, { initialState });
    }
 */
var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.title = "�T�{����";
        this.description = "Are your sure wanna deleted?";
        this.closeBtnName = "����";
        this.action = function () { };
    }
    ConfirmComponent.prototype.confirm = function () {
        this.action();
        this.bsModalRef.hide();
    };
    ConfirmComponent.prototype.ngOnInit = function () {
    };
    ConfirmComponent = __decorate([
        core_1.Component({
            selector: 'confirm',
            template: __webpack_require__("./ClientApp/app/core/confirm.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [modal_1.BsModalRef])
    ], ConfirmComponent);
    return ConfirmComponent;
}());
exports.ConfirmComponent = ConfirmComponent;


/***/ }),

/***/ "./ClientApp/app/core/faicon.directive.ts":
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
var FaIconDirective = /** @class */ (function () {
    function FaIconDirective(el) {
        this.el = el;
    }
    FaIconDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.innerHTML += "<i class='fa " + this.faIcon + "'></i>";
    };
    __decorate([
        core_1.Input('faIcon'),
        __metadata("design:type", String)
    ], FaIconDirective.prototype, "faIcon", void 0);
    FaIconDirective = __decorate([
        core_1.Directive({
            selector: '[faIcon]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], FaIconDirective);
    return FaIconDirective;
}());
exports.FaIconDirective = FaIconDirective;


/***/ }),

/***/ "./ClientApp/app/core/form-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group has-feedback {{required ? 'required' : ''}} col-sm-{{width}}\"\r\n                 [ngClass]=\"controlVariable.dirty ?\r\n                (controlVariable.valid ? 'has-success' : 'has-error') :\r\n                (controlVariable.valid ? '' : 'has-warning')\"\r\n     [tooltip]=\"controlVariable.valid ? null : errorMessage\"        \r\n     >\r\n    <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/core/form-group.component.ts":
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
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var FormGroupComponent = /** @class */ (function () {
    function FormGroupComponent() {
        this.errorMessage = "��J��Ʀ����~�A�Э��s��J";
    }
    FormGroupComponent.prototype.ngOnInit = function () {
        if (this.controlVariable.errors) {
            if (this.controlVariable.errors.required)
                this.errorMessage = "This field is required";
        }
        //throw new Error("Method not implemented.");
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], FormGroupComponent.prototype, "width", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", forms_1.AbstractControlDirective)
    ], FormGroupComponent.prototype, "controlVariable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FormGroupComponent.prototype, "required", void 0);
    FormGroupComponent = __decorate([
        core_1.Component({
            selector: 'form-group',
            template: __webpack_require__("./ClientApp/app/core/form-group.component.html"),
            styles: []
        })
    ], FormGroupComponent);
    return FormGroupComponent;
}());
exports.FormGroupComponent = FormGroupComponent;


/***/ }),

/***/ "./ClientApp/app/core/globals.service.ts":
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
var moment = __webpack_require__("./node_modules/moment/moment.js");
var Globals = /** @class */ (function () {
    function Globals() {
        this.dateFormat = "YYYY/MM/DD";
    }
    Object.defineProperty(Globals.prototype, "razorModel", {
        get: function () {
            return this.model;
        },
        set: function (data) {
            this.model = data;
        },
        enumerable: true,
        configurable: true
    });
    Globals.prototype.dateFormatter = function (s) {
        if (s == null)
            return "";
        if (s.length == 0 || s.length < 6)
            return "";
        if (s.length == 6) {
            var result = this.dealSlashDate(s);
            if (result.length == 10)
                return result;
            // �B�z 990101
            s = '0' + s;
        }
        if (s.length == 7) {
            var result = this.dealSlashDate(s);
            if (result.length == 10)
                return result;
            // �B�z 0990101 or 1031201
            var y = parseInt(s.substr(0, 3), 10) + 1911;
            var m = parseInt(s.substr(3, 2), 10);
            var d = parseInt(s.substr(5, 2), 10);
            var date = y + "/" + m + "/" + d;
            //if (moment(date).isValid()) {
            //    var returnDate = moment(date).format(dateFormat);
            //    var stringDate = returnDate.toString();
            //    return stringDate;
            //}
            //else
            //    return "";
            return this.getDateString(date);
        }
        if (s.length == 8 || s.length == 9) {
            var result = this.dealSlashDate(s);
            if (result.length == 10)
                return result;
        }
        return this.getDateString(s);
    };
    Globals.prototype.dealSlashDate = function (s) {
        if (s.indexOf('/') > -1) {
            var array = s.split('/');
            if (array.length == 3) {
                var y = parseInt(array[0]) + 1911;
                var m = parseInt(array[1], 10);
                var d = parseInt(array[2], 10);
                var date = y + "/" + m + "/" + d;
                return this.getDateString(date);
            }
        }
        return s;
    };
    Globals.prototype.getDateString = function (s) {
        if (moment(s).isValid()) {
            var returnDate = moment(s).format(this.dateFormat);
            var stringDate = returnDate.toString();
            return stringDate;
        }
        else {
            return "";
        }
    };
    Globals = __decorate([
        core_1.Injectable()
    ], Globals);
    return Globals;
}());
exports.Globals = Globals;


/***/ }),

/***/ "./ClientApp/app/core/validate-span.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"\r\n      [hidden]=\"controlVariable.pristine || controlVariable.untouched\"\r\n      [ngClass]=\"{'glyphicon-ok': controlVariable.valid, 'glyphicon-remove': !controlVariable.valid}\">\r\n</span>"

/***/ }),

/***/ "./ClientApp/app/core/validate-span.component.ts":
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
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var ValidateSpanComponent = /** @class */ (function () {
    function ValidateSpanComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", forms_1.AbstractControlDirective)
    ], ValidateSpanComponent.prototype, "controlVariable", void 0);
    ValidateSpanComponent = __decorate([
        core_1.Component({
            selector: 'validate-span',
            template: __webpack_require__("./ClientApp/app/core/validate-span.component.html"),
            styles: ['[hidden] { display: none !important; }']
        })
    ], ValidateSpanComponent);
    return ValidateSpanComponent;
}());
exports.ValidateSpanComponent = ValidateSpanComponent;


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

module.exports = "<a routerLink=\"product\" class=\"btn btn-info\">Add New Product</a>\r\n<div class=\"row\">\r\n    <div class=\"col-md-4 well well-sm\" *ngFor=\"let p of products\">\r\n        <div><strong>{{ p.Title }}</strong></div>\r\n        <div><strong>{{ p.Price | currency: \"TWD\" }}</strong></div>\r\n        <button class=\"btn btn-success btn-sm pull-right\" (click)=\"addProduct(p)\">Buy</button>\r\n    </div>\r\n</div>"

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

/***/ "./ClientApp/app/shop/product.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    {{ testModel | json }}\r\n</p>\r\n\r\n<form #form=\"ngForm\" (submit)=\"submitForm(form)\" class=\"form-horizontal\" novalidate>\r\n    <p>\r\n        <button class=\"btn btn-primary\" type=\"submit\"\r\n                [disabled]=\"form.$pristine || form.$invalid\" [faIcon]=\"'fa-save'\">\r\n            存檔\r\n        </button>\r\n        <button class=\"btn btn-danger\" type=\"button\" (click)=\"confirmDelete('請確認是否刪除')\" [faIcon]=\"'fa-trash'\">\r\n            刪除 <!-- 同一段 html 不可以有兩個 directives，這裡已經使用 confirmComponent 因此就不能使用 iconComponent -->\r\n        </button>\r\n        <button class=\"btn btn-warning\" (click)=\"cancelForm()\" type=\"button\" [faIcon]=\"'fa-undo'\">\r\n            取消\r\n        </button>\r\n    </p>\r\n    <div class=\"row\">\r\n        <form-group [width]=\"4\" [controlVariable]=\"id\" [required]=\"true\">\r\n            <label class=\"control-label col-sm-6\" for=\"id\">Id</label>\r\n            <div class=\"col-sm-6\">\r\n                <input type=\"number\" id=\"id\" name=\"Id\" class=\"form-control\"\r\n                       #id=\"ngModel\" required\r\n                       [(ngModel)]=\"model.Id\" />\r\n                <validate-span [controlVariable]=\"id\"></validate-span>\r\n            </div>\r\n        </form-group>\r\n        <form-group [width]=\"4\" [controlVariable]=\"title\" [required]=\"false\">\r\n            <label class=\"control-label col-sm-6\" for=\"title\">Title</label>\r\n            <div class=\"col-sm-6\">\r\n                <input type=\"text\" id=\"title\" name=\"Title\" class=\"form-control\"\r\n                       #title=\"ngModel\"\r\n                       [(ngModel)]=\"model.Title\" />\r\n                <validate-span [controlVariable]=\"title\"></validate-span>\r\n            </div>\r\n        </form-group>\r\n        <form-group [width]=\"4\" [controlVariable]=\"price\" [required]=\"false\">\r\n            <label class=\"control-label col-sm-6\" for=\"price\">Price</label>\r\n            <div class=\"col-sm-6\">\r\n                <input type=\"number\" id=\"price\" name=\"Price\" class=\"form-control\"\r\n                       #price=\"ngModel\"\r\n                       [(ngModel)]=\"model.Price\" />\r\n                <validate-span [controlVariable]=\"price\"></validate-span>\r\n            </div>\r\n        </form-group>\r\n    </div>\r\n    <div class=\"row\">\r\n        <form-group [width]=\"4\" [controlVariable]=\"importDate\" [required]=\"false\">\r\n            <label class=\"control-label col-sm-6\" for=\"importDate\">ImportDate</label>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"input-group\">\r\n                    <input id=\"importDate\" name=\"ImportDate\" class=\"form-control\" type=\"text\"\r\n                           #importDate=\"ngModel\" bsDatepicker #dpImportDate=\"bsDatepicker\"\r\n                           [ngModel]=\"model.ImportDate\" (ngModelChange)=\"model.ImportDate = dateFormat($event)\" />\r\n                    <span class=\"input-group-btn\">\r\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"dpImportDate.toggle()\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\r\n                    </span>\r\n                </div>\r\n                <validate-span [controlVariable]=\"importDate\"></validate-span>\r\n            </div>\r\n        </form-group>\r\n        <form-group [width]=\"4\" [controlVariable]=\"exportDate\" [required]=\"false\">\r\n            <label class=\"control-label col-sm-6\" for=\"exportDate\">ExportDate</label>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"input-group\">\r\n                    <input id=\"exportDate\" name=\"ExportDate\" class=\"form-control\" type=\"text\"\r\n                           #exportDate=\"ngModel\" bsDatepicker #dpExportDate=\"bsDatepicker\"\r\n                           [ngModel]=\"model.ExportDate\" (ngModelChange)=\"model.ExportDate = dateFormat($event)\" />\r\n                    <span class=\"input-group-btn\">\r\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"dpExportDate.toggle()\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\r\n                    </span>\r\n                </div>\r\n                <validate-span [controlVariable]=\"exportDate\"></validate-span>\r\n            </div>\r\n        </form-group>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./ClientApp/app/shop/product.component.ts":
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
var Order_1 = __webpack_require__("./ClientApp/app/shared/Order.ts");
var modal_1 = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
var confirm_component_1 = __webpack_require__("./ClientApp/app/core/confirm.component.ts");
var globals_service_1 = __webpack_require__("./ClientApp/app/core/globals.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(modalService, globals, router) {
        this.modalService = modalService;
        this.globals = globals;
        this.router = router;
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.model = new Order_1.Product();
        this.testModel = this.globals.razorModel;
    };
    ProductComponent.prototype.deleting = function () {
        alert("Call deleting function");
    };
    ProductComponent.prototype.confirmDelete = function (message) {
        var initialState = {
            action: this.deleting
        };
        if (message)
            initialState.description = message;
        this.modalRef = this.modalService.show(confirm_component_1.ConfirmComponent, { initialState: initialState });
    };
    /**
     * �N��N������榡�]�]�t����~�^�ন yyyy/MM/dd
     * @param date �i�H�O����~�G 85/01/23
     */
    ProductComponent.prototype.dateFormat = function (date) {
        return this.globals.dateFormatter(date);
    };
    ProductComponent.prototype.submitForm = function (form) {
        if (form.valid) {
            alert(JSON.stringify(this.model));
        }
    };
    ProductComponent.prototype.cancelForm = function () {
        this.router.navigate([""]);
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'product',
            template: __webpack_require__("./ClientApp/app/shop/product.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [modal_1.BsModalService,
            globals_service_1.Globals, router_1.Router])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;


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

/***/ "./node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map