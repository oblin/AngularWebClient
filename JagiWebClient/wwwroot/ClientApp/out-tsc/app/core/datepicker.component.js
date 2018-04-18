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
var globals_service_1 = require("./globals.service");
var datepicker_1 = require("ngx-bootstrap/datepicker");
var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent(globals, localeService) {
        this.globals = globals;
        this.localeService = localeService;
    }
    DatepickerComponent.prototype.ngOnInit = function () {
        this.localeService.use("zh-cn");
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatepickerComponent.prototype, "datePicker", void 0);
    DatepickerComponent = __decorate([
        core_1.Component({
            selector: 'my-datepicker',
            templateUrl: './datepicker.component.html',
            styles: ["\n    .popup {\n      position: absolute;\n      background-color: #fff;\n      border-radius: 3px;\n      border: 1px solid #ddd;\n      height: 251px;\n      z-index: 100;\n    }\n  "],
        }),
        __metadata("design:paramtypes", [globals_service_1.Globals, datepicker_1.BsLocaleService])
    ], DatepickerComponent);
    return DatepickerComponent;
}());
exports.DatepickerComponent = DatepickerComponent;
//# sourceMappingURL=datepicker.component.js.map