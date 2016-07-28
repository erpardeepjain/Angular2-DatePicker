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
var common_1 = require('@angular/common');
var BootFlatDatePicker = (function () {
    function BootFlatDatePicker(elem) {
        this.elem = elem;
        this.dateChanged = new core_1.EventEmitter();
        this.showTextBox = true;
        this.showSelector = false;
        this.visibleMonth = { monthTxt: '', monthNbr: 0, year: 0 };
        this.selectedDate = { year: 0, month: 0, day: 0 };
        this.weekDays = [];
        this.dates = [];
        this.selectionDayTxt = '';
        this.dayIdx = 0;
        this.today = null;
        this.PREV_MONTH = 1;
        this.CURR_MONTH = 2;
        this.NEXT_MONTH = 3;
        this.dayLabels = { su: 'Sun', mo: 'Mon', tu: 'Tue', we: 'Wed', th: 'Thu', fr: 'Fri', sa: 'Sat' };
        this.monthLabels = { 1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec' };
        this.dateFormat = 'yyyy-mm-dd';
        this.todayBtnTxt = 'Today';
        this.firstDayOfWeek = 'mo';
        this.sunHighlight = true;
        this.height = '34px';
        this.width = '100%';
        this.background = "red";
        this.today = new Date();
    }
    BootFlatDatePicker.prototype.ngOnInit = function () {
        var _this = this;
        this.dayLabels = this.options.dayLabels !== undefined ? this.options.dayLabels : this.dayLabels;
        this.monthLabels = this.options.monthLabels !== undefined ? this.options.monthLabels : this.monthLabels;
        this.dateFormat = this.options.dateFormat !== undefined ? this.options.dateFormat : this.dateFormat;
        this.todayBtnTxt = this.options.todayBtnTxt !== undefined ? this.options.todayBtnTxt : this.todayBtnTxt;
        this.firstDayOfWeek = this.options.firstDayOfWeek !== undefined ? this.options.firstDayOfWeek : this.firstDayOfWeek;
        this.sunHighlight = this.options.sunHighlight !== undefined ? this.options.sunHighlight : this.sunHighlight;
        this.height = this.options.height !== undefined ? this.options.height : this.height;
        this.width = this.options.width !== undefined ? this.options.width : this.width;
        this.background = this.options.background !== undefined ? this.options.background : this.background;
        this.showTextBox = this.options.showTextBox !== undefined ? this.options.showTextBox : this.showTextBox;
        if (this.showTextBox == false) {
            this.openBtnClicked();
            this.border = 'none';
            var doc = document.getElementsByTagName('html')[0];
            doc.addEventListener('click', function (event) {
                if (_this.showSelector && event.target && _this.elem.nativeElement !== event.target && !_this.elem.nativeElement.contains(event.target)) {
                    _this.showSelector = true;
                }
            }, true);
        }
        else if (this.showTextBox == true) {
            var doc = document.getElementsByTagName('html')[0];
            doc.addEventListener('click', function (event) {
                if (_this.showSelector && event.target && _this.elem.nativeElement !== event.target && !_this.elem.nativeElement.contains(event.target)) {
                    _this.showSelector = false;
                }
            }, false);
        }
        var days = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
        this.dayIdx = days.indexOf(this.firstDayOfWeek);
        if (this.dayIdx !== -1) {
            var idx = this.dayIdx;
            for (var i = 0; i < days.length; i++) {
                this.weekDays.push(this.dayLabels[days[idx]]);
                idx = days[idx] === 'sa' ? 0 : idx + 1;
            }
        }
    };
    BootFlatDatePicker.prototype.ngOnChanges = function (changes) {
        this.selectionDayTxt = changes['selDate'].currentValue;
        if (this.selectionDayTxt !== '') {
            var fmt = this.options.dateFormat !== undefined ? this.options.dateFormat : this.dateFormat;
            var dpos = fmt.indexOf('dd');
            var mpos = fmt.indexOf('mm');
            var ypos = fmt.indexOf('yyyy');
            this.selectedDate = { day: parseInt(this.selectionDayTxt.substring(dpos, dpos + 2)),
                month: parseInt(this.selectionDayTxt.substring(mpos, mpos + 2)),
                year: parseInt(this.selectionDayTxt.substring(ypos, ypos + 4)) };
        }
    };
    BootFlatDatePicker.prototype.removeBtnClicked = function () {
        this.selectionDayTxt = '';
        this.selectedDate = { year: 0, month: 0, day: 0 };
        this.dateChanged.emit({ date: {}, formatted: this.selectionDayTxt, epoc: 0 });
    };
    BootFlatDatePicker.prototype.openBtnClicked = function () {
        this.showSelector = !this.showSelector;
        if (this.showSelector) {
            var y = 0, m = 0;
            if (this.selectedDate.year === 0 && this.selectedDate.month === 0 && this.selectedDate.day === 0) {
                y = this.today.getFullYear();
                m = this.today.getMonth() + 1;
            }
            else {
                y = this.selectedDate.year;
                m = this.selectedDate.month;
            }
            this.visibleMonth = { monthTxt: this.monthLabels[m], monthNbr: m, year: y };
            this.createMonth(m, y);
        }
    };
    BootFlatDatePicker.prototype.prevMonth = function () {
        var m = this.visibleMonth.monthNbr;
        var y = this.visibleMonth.year;
        if (m === 1) {
            m = 12;
            y--;
        }
        else {
            m--;
        }
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.createMonth(m, y);
    };
    BootFlatDatePicker.prototype.nextMonth = function () {
        var m = this.visibleMonth.monthNbr;
        var y = this.visibleMonth.year;
        if (m === 12) {
            m = 1;
            y++;
        }
        else {
            m++;
        }
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.createMonth(m, y);
    };
    BootFlatDatePicker.prototype.prevYear = function () {
        this.visibleMonth.year--;
        this.createMonth(this.visibleMonth.monthNbr, this.visibleMonth.year);
    };
    BootFlatDatePicker.prototype.nextYear = function () {
        this.visibleMonth.year++;
        this.createMonth(this.visibleMonth.monthNbr, this.visibleMonth.year);
    };
    BootFlatDatePicker.prototype.todayClicked = function () {
        this.selectDate({ day: this.today.getDate(), month: this.today.getMonth() + 1, year: this.today.getFullYear() });
    };
    BootFlatDatePicker.prototype.cellClicked = function (cell) {
        if (cell.cmo === this.PREV_MONTH) {
            this.prevMonth();
        }
        else if (cell.cmo === this.CURR_MONTH) {
            this.selectDate(cell);
        }
        else if (cell.cmo === this.NEXT_MONTH) {
            this.nextMonth();
        }
    };
    BootFlatDatePicker.prototype.selectDate = function (date) {
        this.selectedDate = { day: date.day, month: date.month, year: date.year };
        this.selectionDayTxt = this.formatDate(date);
        if (this.showTextBox == false) {
            this.showSelector = true;
        }
        else if (this.showTextBox == true) {
            this.showSelector = false;
        }
        var epoc = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getTime() / 1000.0;
        this.dateChanged.emit({ date: this.selectedDate, formatted: this.selectionDayTxt, epoc: epoc });
    };
    BootFlatDatePicker.prototype.preZero = function (val) {
        return val < '10' ? '0' + val : val;
    };
    BootFlatDatePicker.prototype.formatDate = function (val) {
        return this.dateFormat.replace('yyyy', val.year)
            .replace('mm', this.preZero(val.month))
            .replace('dd', this.preZero(val.day));
    };
    BootFlatDatePicker.prototype.monthText = function (m) {
        return this.monthLabels[m];
    };
    BootFlatDatePicker.prototype.monthStartIdx = function (y, m) {
        var d = new Date();
        d.setDate(1);
        d.setMonth(m - 1);
        d.setFullYear(y);
        var idx = d.getDay() + this.sundayIdx();
        return idx >= 7 ? idx - 7 : idx;
    };
    BootFlatDatePicker.prototype.daysInMonth = function (m, y) {
        return new Date(y, m, 0).getDate();
    };
    BootFlatDatePicker.prototype.daysInPrevMonth = function (m, y) {
        if (m === 1) {
            m = 12;
            y--;
        }
        else {
            m--;
        }
        return this.daysInMonth(m, y);
    };
    BootFlatDatePicker.prototype.isCurrDay = function (d, m, y, cmo) {
        return d === this.today.getDate() && m === this.today.getMonth() + 1 && y === this.today.getFullYear() && cmo === 2;
    };
    BootFlatDatePicker.prototype.sundayIdx = function () {
        return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
    };
    BootFlatDatePicker.prototype.createMonth = function (m, y) {
        this.dates.length = 0;
        var monthStart = this.monthStartIdx(y, m);
        var dInThisM = this.daysInMonth(m, y);
        var dInPrevM = this.daysInPrevMonth(m, y);
        var sunIdx = this.sundayIdx();
        var dayNbr = 1;
        var cmo = this.PREV_MONTH;
        for (var i = 1; i < 7; i++) {
            var week = [];
            if (i === 1) {
                var pm = dInPrevM - monthStart + 1;
                for (var j = pm; j <= dInPrevM; j++) {
                    week.push({ day: j, month: m, year: y, cmo: cmo, currDay: this.isCurrDay(j, m, y, cmo), sun: week.length === sunIdx });
                }
                cmo = this.CURR_MONTH;
                var daysLeft = 7 - week.length;
                for (var j = 0; j < daysLeft; j++) {
                    week.push({ day: dayNbr, month: m, year: y, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo), sun: week.length === sunIdx });
                    dayNbr++;
                }
            }
            else {
                for (var j = 1; j < 8; j++) {
                    if (dayNbr > dInThisM) {
                        dayNbr = 1;
                        cmo = this.NEXT_MONTH;
                    }
                    week.push({ day: dayNbr, month: m, year: y, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo), sun: week.length === sunIdx });
                    dayNbr++;
                }
            }
            this.dates.push(week);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BootFlatDatePicker.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BootFlatDatePicker.prototype, "selDate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BootFlatDatePicker.prototype, "dateChanged", void 0);
    BootFlatDatePicker = __decorate([
        core_1.Component({
            selector: 'bootflat-date-picker',
            templateUrl: 'src/Angular2-components/DatePicker/bootflat-datepicker.html',
            styleUrls: ['src/Angular2-components/DatePicker/bootflat-datepicker.css'],
            directives: [common_1.NgIf, common_1.NgFor, common_1.NgClass, common_1.NgStyle]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], BootFlatDatePicker);
    return BootFlatDatePicker;
}());
exports.BootFlatDatePicker = BootFlatDatePicker;

//# sourceMappingURL=bootflat-datepicker.js.map
