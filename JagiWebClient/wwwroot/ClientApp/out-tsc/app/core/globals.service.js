"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moment = require("moment");
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
//# sourceMappingURL=globals.service.js.map