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
var Pagination = (function () {
    function Pagination() {
        this.nextPage = new core_1.EventEmitter();
        this.page = 1;
        this.pagination_array = [];
    }
    Pagination.prototype.ngOnInit = function () {
        this.pagination();
    };
    Pagination.prototype.pagination = function (pageNumber) {
        if (pageNumber) {
            this.nextPage.emit({ page: pageNumber });
            if (pageNumber == this.page) {
                console.log("Dont try to be Over Smart !!!!");
                return;
            }
            else if (pageNumber != this.page) {
                this.page = pageNumber;
            }
        }
        if (this.page + 5 > this.totalPage) {
            this.pagination_array = [];
            if (this.totalPage > 5) {
                var dummyPage = (this.page + 5) - this.totalPage;
                for (var i = this.page - dummyPage; i < this.totalPage; i++) {
                    this.pagination_array.push(i);
                }
            }
            else if (this.totalPage < 5) {
                for (var i = 1; i < this.totalPage; i++) {
                    this.pagination_array.push(i);
                }
            }
        }
        else if (this.page + 5 < this.totalPage) {
            this.pagination_array = [];
            for (var i = this.page; i < this.page + 5; i++) {
                this.pagination_array.push(i);
            }
        }
    };
    Pagination.prototype.lastPage = function (lastPage) {
        this.nextPage.emit({ page: lastPage });
        this.page = lastPage;
    };
    Pagination.prototype.nextPageFun = function () {
        if (this.page < this.totalPage) {
            this.page = this.page + 1;
            this.nextPage.emit({ page: this.page });
            this.pagination();
        }
    };
    Pagination.prototype.PrevPageFun = function () {
        if (this.page > 1) {
            this.page = this.page - 1;
            this.nextPage.emit({ page: this.page });
            this.pagination();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Pagination.prototype, "totalPage", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Pagination.prototype, "nextPage", void 0);
    Pagination = __decorate([
        core_1.Component({
            selector: 'pagination',
            inputs: ['totalPage'],
            templateUrl: 'src/Angular2-components/pagination/pagination.html',
            styleUrls: ['src/app.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Pagination);
    return Pagination;
}());
exports.Pagination = Pagination;

//# sourceMappingURL=pagination.js.map
