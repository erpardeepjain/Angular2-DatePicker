import {Component, OnInit} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {BootFlatDatePicker} from './DatePicker/bootflat-datepicker';

@Component({
    selector: 'app',
    templateUrl: 'app.html'
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

    formatDate = function() {
        var d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
    }

    onDateChanged1(event) {
        console.log('onDateChanged1(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        this.selectedDatea = event.formatted;
        console.log(this.selectedDatea, "=======");
    }

    // Date Picker //
}
bootstrap(app);