import {Component, OnInit} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {BootFlatDatePicker} from './DatePicker/bootflat-datepicker';

@Component({
    selector: 'app',
    templateUrl: 'src/app.html',
    directives: [BootFlatDatePicker]
})

class app implements OnInit {

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
        this.selectedDatea = event.formatted;
    }
    // Date Picker //
}
bootstrap(app);