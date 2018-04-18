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
//# sourceMappingURL=faicon.directive.js.map