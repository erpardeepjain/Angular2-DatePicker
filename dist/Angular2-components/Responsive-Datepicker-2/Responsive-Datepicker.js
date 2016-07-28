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
var DatepickerResponsive = (function () {
    function DatepickerResponsive(elem) {
        this.elem = elem;
        this.DateSelected = new core_1.EventEmitter();
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
        this.firstDayOfWeek = 'su';
        this.sunHighlight = true;
        this.height = '34px';
        this.width = '600px';
        this.CalWidth = '600px';
        this.background = "#699DE7";
        this.today = new Date();
    }
    DatepickerResponsive.prototype.ngOnInit = function () {
        var _this = this;
        this.openBtnClicked();
        this.border = 'none';
        var doc = document.getElementsByTagName('html')[0];
        doc.addEventListener('click', function (event) {
            if (_this.showSelector && event.target && _this.elem.nativeElement !== event.target && !_this.elem.nativeElement.contains(event.target)) {
                _this.showSelector = true;
            }
        }, true);
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
    DatepickerResponsive.prototype.ngOnChanges = function (changes) {
        this.selectionDayTxt = changes['selDate'].currentValue;
        if (this.selectionDayTxt !== '') {
            var fmt = this.dateFormat;
            var dpos = fmt.indexOf('dd');
            var mpos = fmt.indexOf('mm');
            var ypos = fmt.indexOf('yyyy');
            this.selectedDate = { day: parseInt(this.selectionDayTxt.substring(dpos, dpos + 2)),
                month: parseInt(this.selectionDayTxt.substring(mpos, mpos + 2)),
                year: parseInt(this.selectionDayTxt.substring(ypos, ypos + 4)) };
        }
    };
    DatepickerResponsive.prototype.openBtnClicked = function () {
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
    DatepickerResponsive.prototype.prevMonth = function () {
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
    DatepickerResponsive.prototype.nextMonth = function () {
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
    DatepickerResponsive.prototype.cellClicked = function (cell) {
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
    DatepickerResponsive.prototype.selectDate = function (date) {
        this.selectedDate = { day: date.day, month: date.month, year: date.year };
        this.selectionDayTxt = this.formatDate(date);
        this.showSelector = true;
        var epoc = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getTime() / 1000.0;
        this.DateSelected.emit({ date: this.selectedDate, formatted: this.selectionDayTxt, epoc: epoc });
    };
    DatepickerResponsive.prototype.preZero = function (val) {
        return val < '10' ? '0' + val : val;
    };
    DatepickerResponsive.prototype.formatDate = function (val) {
        return this.dateFormat.replace('yyyy', val.year)
            .replace('mm', this.preZero(val.month))
            .replace('dd', this.preZero(val.day));
    };
    DatepickerResponsive.prototype.monthText = function (m) {
        return this.monthLabels[m];
    };
    DatepickerResponsive.prototype.monthStartIdx = function (y, m) {
        var d = new Date();
        d.setDate(1);
        d.setMonth(m - 1);
        d.setFullYear(y);
        var idx = d.getDay() + this.sundayIdx();
        return idx >= 7 ? idx - 7 : idx;
    };
    DatepickerResponsive.prototype.daysInMonth = function (m, y) {
        return new Date(y, m, 0).getDate();
    };
    DatepickerResponsive.prototype.daysInPrevMonth = function (m, y) {
        if (m === 1) {
            m = 12;
            y--;
        }
        else {
            m--;
        }
        return this.daysInMonth(m, y);
    };
    DatepickerResponsive.prototype.isCurrDay = function (d, m, y, cmo) {
        return d === this.today.getDate() && m === this.today.getMonth() + 1 && y === this.today.getFullYear() && cmo === 2;
    };
    DatepickerResponsive.prototype.sundayIdx = function () {
        return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
    };
    DatepickerResponsive.prototype.createMonth = function (m, y) {
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
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatepickerResponsive.prototype, "DateSelected", void 0);
    DatepickerResponsive = __decorate([
        core_1.Component({
            selector: 'responsive-date-picker',
            templateUrl: 'src/Angular2-components/Responsive-Datepicker-2/Responsive-Datepicker.html',
            styleUrls: ['src/Angular2-components/Responsive-Datepicker-2/Responsive-Datepicker.css'],
            directives: [common_1.NgIf, common_1.NgFor, common_1.NgClass, common_1.NgStyle]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DatepickerResponsive);
    return DatepickerResponsive;
}());
exports.DatepickerResponsive = DatepickerResponsive;

//# sourceMappingURL=Responsive-Datepicker.js.map
