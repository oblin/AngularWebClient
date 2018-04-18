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
var forms_1 = require("@angular/forms");
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
            templateUrl: './form-group.component.html',
            styles: []
        })
    ], FormGroupComponent);
    return FormGroupComponent;
}());
exports.FormGroupComponent = FormGroupComponent;
//# sourceMappingURL=form-group.component.js.map