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
var core_1 = require('@angular/core');
var Delete = (function () {
    function Delete() {
        this.deleteFun = new core_1.EventEmitter();
        this.lg = false;
        this.BName = null;
        this.disable = false;
    }
    Delete.prototype.ngOnInit = function () {
        this.IDD = ++Delete.cmpId;
    };
    Delete.prototype.DeleteFunction = function () {
        this.deleteFun.emit('emit');
    };
    Delete.cmpId = 0;
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Delete.prototype, "deleteFun", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Delete.prototype, "lg", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Delete.prototype, "BName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Delete.prototype, "disable", void 0);
    Delete = __decorate([
        core_1.Component({
            selector: 'delete',
            inputs: ['lg'],
            templateUrl: 'src/Angular2-components/Delete/delete-modal.html',
            styleUrls: ['src/app.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Delete);
    return Delete;
}());
exports.Delete = Delete;

//# sourceMappingURL=delete-modal.js.map
