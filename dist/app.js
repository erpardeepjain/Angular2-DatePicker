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
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var router_1 = require('angular2/router');
var browser_1 = require('angular2/platform/browser');
var breadcrumb_1 = require('./Angular2-components/breadcrumb/breadcrumb');
var tab_1 = require('./Angular2-components/tab/tab');
var bootflat_datepicker_1 = require('./Angular2-components/DatePicker/bootflat-datepicker');
var Responsive_Datepicker_1 = require('./Angular2-components/Responsive-Datepicker-2/Responsive-Datepicker');
var pagination_1 = require('./Angular2-components/pagination/pagination');
var delete_modal_1 = require('./Angular2-components/Delete/delete-modal');
var angular2_component_1 = require('./angular2-component');
var App = (function () {
    function App() {
        this.numberList = [1, 2, 3, 4, 5];
        this.BootflatDatePicker = false;
        this.ResponsiveDatePicker = true;
        this.Pagination = false;
        this.Delete = false;
        this.newSelectedDate = null;
        this.myDatePickerOptions = {
            todayBtnTxt: 'Today',
            dateFormat: 'yyyy-mm-dd',
            firstDayOfWeek: 'mo',
            sunHighlight: true,
            height: '34px',
            width: '300px',
            background: "#3BAFDA",
            showTextBox: false,
        };
        this.selectedDate = '';
    }
    App.prototype.BootflatDatepickerFun = function () {
        this.BootflatDatePicker = true;
        this.ResponsiveDatePicker = false;
        this.Pagination = false;
        this.Delete = false;
    };
    App.prototype.ResponsiveDatepickerFun = function () {
        this.BootflatDatePicker = false;
        this.ResponsiveDatePicker = true;
        this.Pagination = false;
        this.Delete = false;
    };
    App.prototype.paginationFun = function () {
        this.BootflatDatePicker = false;
        this.ResponsiveDatePicker = false;
        this.Pagination = true;
        this.Delete = false;
    };
    App.prototype.DeleteFun = function () {
        this.BootflatDatePicker = false;
        this.ResponsiveDatePicker = false;
        this.Pagination = false;
        this.Delete = true;
    };
    App.prototype.nextPage = function (event) {
        console.log('Selected Page is: ' + event.page);
    };
    App.prototype.DeleteElement = function (numberDelete) {
        console.log(numberDelete);
        var indexx = this.numberList.indexOf(numberDelete);
        this.numberList.splice(indexx, 1);
    };
    App.prototype.onDateChanged1 = function (event) {
        console.log('onDateChanged1(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        this.newSelectedDate = event.formatted;
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'src/app.html',
            styleUrls: ['src/app.css'],
            directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, breadcrumb_1.Breadcrumb, tab_1.Tab, bootflat_datepicker_1.BootFlatDatePicker, Responsive_Datepicker_1.DatepickerResponsive, pagination_1.Pagination, delete_modal_1.Delete]
        }),
        router_1.RouteConfig([
            { path: '/Angular2Component', component: angular2_component_1.Angular2Component, name: 'Angular2' }
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
browser_1.bootstrap(App, [router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);

//# sourceMappingURL=app.js.map
