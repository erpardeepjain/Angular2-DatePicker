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
var GlobalService_1 = require('../GlobalService');
var DemoInfo = (function () {
    function DemoInfo() {
    }
    return DemoInfo;
}());
var FormComponent = (function () {
    function FormComponent(fb, base_path_service) {
        this.base_path_service = base_path_service;
        this.getData = [];
        this.demoInfo = new DemoInfo();
        this.CreateGroup = fb.group({
            'title': new common_1.Control(this.demoInfo.title, common_1.Validators.required),
            'body': new common_1.Control(this.demoInfo.body, common_1.Validators.required),
            'uid': new common_1.Control(this.demoInfo.uid, common_1.Validators.required),
            'id': new common_1.Control(this.demoInfo.id, common_1.Validators.required)
        });
    }
    FormComponent.prototype.ngOnInit = function () { this.API_getRequest(); };
    FormComponent.prototype.addNewGroup = function (demoInfo) {
        console.log(demoInfo, 'whole object');
        var url = 'http://jsonplaceholder.typicode.com/posts/';
        var data = { body: "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto", id: 101,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", userId: 101 };
        this.base_path_service.PostRequest(url, demoInfo)
            .subscribe(function (res) {
            console.log(res);
            alert('Data added with http status: ', res[0].status);
        }, function (err) {
            console.log(err);
        });
        this.demoInfo = new DemoInfo();
    };
    FormComponent.prototype.API_getRequest = function () {
        var _this = this;
        var url_newEvent = 'http://jsonplaceholder.typicode.com/posts';
        this.base_path_service.GetRequest(url_newEvent)
            .subscribe(function (res) {
            console.log(res);
            _this.getData = res[0].json;
        }, function (err) {
            console.log(err);
        });
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'form-component',
            templateUrl: './src/http/form-component.html'
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, GlobalService_1.GlobalService])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;

//# sourceMappingURL=form-component.js.map
