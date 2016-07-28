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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var Tab = (function () {
    function Tab(name, icon, action, color) {
        this.name = name;
        this.icon = icon;
        this.action = action;
        this.color = color;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Tab.prototype, "name", void 0);
    Tab = __decorate([
        core_1.Component({
            selector: 'tab',
            inputs: ['name,icon,action', 'color'],
            templateUrl: 'src/Angular2-components/tab/tab.html',
            styleUrls: ['src/Angular2-components/tab/tab.css']
        }),
        __param(0, core_1.Attribute('name')),
        __param(1, core_1.Attribute('icon')),
        __param(2, core_1.Attribute('action')),
        __param(3, core_1.Attribute('color')), 
        __metadata('design:paramtypes', [String, String, String, String])
    ], Tab);
    return Tab;
}());
exports.Tab = Tab;

//# sourceMappingURL=tab.js.map
