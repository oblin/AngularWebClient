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
var Order_1 = require("../shared/Order");
var modal_1 = require("ngx-bootstrap/modal");
var confirm_component_1 = require("../core/confirm.component");
var globals_service_1 = require("../core/globals.service");
var router_1 = require("@angular/router");
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
            templateUrl: './product.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [modal_1.BsModalService,
            globals_service_1.Globals, router_1.Router])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map