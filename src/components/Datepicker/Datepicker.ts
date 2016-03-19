import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {BootFlatDatePicker} from '../../DatePicker/bootflat-datepicker';
import {Breadcrumb} from '../../breadcrumb/breadcrumb';
import {Tab} from '../../tab/tab';

@Component({
	selector: 'datepicker',
	templateUrl: 'src/components/Datepicker/Datepicker.html',
	directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, BootFlatDatePicker, Tab, Breadcrumb]
})

export class Datepicker {
	tabTitle: string = 'Date Picker';
    newSelectedDate:any;
    
	constructor() {
		console.log('components called');
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

