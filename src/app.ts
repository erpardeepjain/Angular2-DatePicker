import {Component, OnInit, provide} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common'
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {bootstrap} from 'angular2/platform/browser';

import {Breadcrumb} from './Angular2-components/breadcrumb/breadcrumb';
import {Tab} from './Angular2-components/tab/tab';
import {BootFlatDatePicker} from './Angular2-components/DatePicker/bootflat-datepicker';
import {DatepickerResponsive} from './Angular2-components/Responsive-Datepicker-2/Responsive-Datepicker';
import {Pagination} from './Angular2-components/pagination/pagination';
import {Delete} from './Angular2-components/Delete/delete-modal';
import {Angular2Component} from './angular2-component';

@Component({
    selector: 'app',
    templateUrl: 'src/app.html',
    styleUrls: ['src/app.css'],
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, Breadcrumb, Tab, BootFlatDatePicker, DatepickerResponsive, Pagination, Delete]
})

@RouteConfig([
    { path: '/Angular2Component', component: Angular2Component, name: 'Angular2' }
])
class App {
    numberList: Array<number> = [1, 2, 3, 4, 5];
    BootflatDatePicker: boolean = false;
    ResponsiveDatePicker: boolean = true;
    Pagination: boolean = false;
    Delete: boolean = false;

    newSelectedDate: string = null;

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

bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);