import {Component, OnInit, provide} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {Breadcrumb} from './Angular2-components/breadcrumb/breadcrumb';
import {Tab} from './Angular2-components/tab/tab';
import {BootFlatDatePicker} from './Angular2-components/DatePicker/bootflat-datepicker';
import {DatepickerResponsive} from './Angular2-components/Responsive-Datepicker-2/Responsive-Datepicker';
import {Pagination} from './Angular2-components/pagination/pagination';
import {Delete} from './Angular2-components/Delete/delete-modal';

import { Angular2Component } from './portfolio/angular2-component';
import { FormComponent } from './http/form-component';

import {GlobalService} from './GlobalService';

@Component({
    selector: 'demo',
    templateUrl: 'src/demo.html',
    styleUrls: ['src/app.css'],
    directives: [Breadcrumb, Tab, BootFlatDatePicker, DatepickerResponsive, Pagination, Delete]
})

export class DemoComponent {
    numberList: Array<number> = [1, 2, 3, 4, 5];
    BootflatDatePicker: boolean = false;
    ResponsiveDatePicker: boolean = true;
    Pagination: boolean = false;
    Delete: boolean = false;

    newSelectedDate: string = null;

    constructor(private base_path_service: GlobalService) {
        console.log("Called Angular2 RC.1");
    }
    BootflatDatepickerFun() {
        this.BootflatDatePicker = true;
        this.ResponsiveDatePicker = false;
        this.Pagination = false;
        this.Delete = false;
    }

    ResponsiveDatepickerFun() {
        this.BootflatDatePicker = false;
        this.ResponsiveDatePicker = true;
        this.Pagination = false;
        this.Delete = false;
    }
    paginationFun() {
        this.BootflatDatePicker = false;
        this.ResponsiveDatePicker = false;
        this.Pagination = true;
        this.Delete = false;
    }

    DeleteFun() {
        this.BootflatDatePicker = false;
        this.ResponsiveDatePicker = false;
        this.Pagination = false;
        this.Delete = true;
    }

    nextPage(event) {
        console.log('Selected Page is: ' + event.page);
    }

    DeleteElement(numberDelete) {
        console.log(numberDelete);
        let indexx = this.numberList.indexOf(numberDelete)
        this.numberList.splice(indexx, 1);
    }
    // Date Picker //
    private myDatePickerOptions = {
        todayBtnTxt: 'Today',
        dateFormat: 'yyyy-mm-dd',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        height: '34px',
        width: '300px',

        background: "#3BAFDA",
        showTextBox: false,
    };
    selectedDate: string = '';

    onDateChanged1(event) {
        console.log('onDateChanged1(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        this.newSelectedDate = event.formatted;
    }
    // Date Picker //
}