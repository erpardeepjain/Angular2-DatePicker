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
var breadcrumb_1 = require('./Angular2-components/breadcrumb/breadcrumb');
var tab_1 = require('./Angular2-components/tab/tab');
var bootflat_datepicker_1 = require('./Angular2-components/DatePicker/bootflat-datepicker');
var Responsive_Datepicker_1 = require('./Angular2-components/Responsive-Datepicker-2/Responsive-Datepicker');
var pagination_1 = require('./Angular2-components/pagination/pagination');
var delete_modal_1 = require('./Angular2-components/Delete/delete-modal');
var GlobalService_1 = require('./GlobalService');
var DemoComponent = (function () {
    function DemoComponent(base_path_service) {
        this.base_path_service = base_path_service;
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
        console.log("Called Angular2 RC.1");
    }
    DemoComponent.prototype.BootflatDatepickerFun = function () {
        this.BootflatDatePicker = true;
        this.ResponsiveDatePicker = false;
        this.Pagination = false;
        this.Delete = false;
    };
    DemoComponent.prototype.ResponsiveDatepickerFun = function () {
        this.BootflatDatePicker = false;
        this.ResponsiveDatePicker = true;
        this.Pagination = false;
        this.Delete = false;
    };
    DemoComponent.prototype.paginationFun = function () {
        this.BootflatDatePicker = false;
        this.ResponsiveDatePicker = false;
        this.Pagination = true;
        this.Delete = false;
    };
    DemoComponent.prototype.DeleteFun = function () {
        this.BootflatDatePicker = false;
        this.ResponsiveDatePicker = false;
        this.Pagination = false;
        this.Delete = true;
    };
    DemoComponent.prototype.nextPage = function (event) {
        console.log('Selected Page is: ' + event.page);
    };
    DemoComponent.prototype.DeleteElement = function (numberDelete) {
        console.log(numberDelete);
        var indexx = this.numberList.indexOf(numberDelete);
        this.numberList.splice(indexx, 1);
    };
    DemoComponent.prototype.onDateChanged1 = function (event) {
        console.log('onDateChanged1(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        this.newSelectedDate = event.formatted;
    };
    DemoComponent = __decorate([
        core_1.Component({
            selector: 'demo',
            templateUrl: 'src/demo.html',
            styleUrls: ['src/app.css'],
            directives: [breadcrumb_1.Breadcrumb, tab_1.Tab, bootflat_datepicker_1.BootFlatDatePicker, Responsive_Datepicker_1.DatepickerResponsive, pagination_1.Pagination, delete_modal_1.Delete]
        }), 
        __metadata('design:paramtypes', [GlobalService_1.GlobalService])
    ], DemoComponent);
    return DemoComponent;
}());
exports.DemoComponent = DemoComponent;

//# sourceMappingURL=demo.js.map
