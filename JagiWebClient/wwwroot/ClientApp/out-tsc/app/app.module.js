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
var http_1 = require("@angular/common/http");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
// ngx-bootstraps
var modal_1 = require("ngx-bootstrap/modal");
var datepicker_1 = require("ngx-bootstrap/datepicker");
var tooltip_1 = require("ngx-bootstrap/tooltip");
var chronos_1 = require("ngx-bootstrap/chronos");
var locale_1 = require("ngx-bootstrap/locale");
chronos_1.defineLocale('zh-cn', locale_1.zhCnLocale);
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var product_list_component_1 = require("./shop/product-list.component");
var cart_component_1 = require("./shop/cart.component");
var shop_component_1 = require("./shop/shop.component");
var checkout_component_1 = require("./checkout/checkout.component");
var login_component_1 = require("./login/login.component");
var product_component_1 = require("./shop/product.component");
var faicon_directive_1 = require("./core/faicon.directive");
var form_group_component_1 = require("./core/form-group.component");
var validate_span_component_1 = require("./core/validate-span.component");
var confirm_component_1 = require("./core/confirm.component");
// Services
var data_service_1 = require("./shared/data.service");
var globals_service_1 = require("./core/globals.service");
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
//# sourceMappingURL=app.module.js.map