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
var http_1 = require('@angular/http');
var router_deprecated_1 = require("@angular/router-deprecated");
var Rx_1 = require('rxjs/Rx');
require('rxjs/Rx');
require('rxjs/add/operator/map');
var GlobalService = (function () {
    function GlobalService(http, router) {
        this.http = http;
        this.router = router;
    }
    GlobalService.prototype.getRequsetOptions = function (url) {
        this.headers = new http_1.Headers();
        this.headers.append("Content-type", "application/json");
        this.headers.append("Authorization", 'Bearer ' + localStorage.getItem('id_token'));
        this.requestoptions = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            url: url,
            headers: this.headers
        });
        return this.requestoptions;
    };
    GlobalService.prototype.PostRequest = function (url, data) {
        this.headers = new http_1.Headers();
        this.headers.append("Content-type", "application/json");
        this.headers.append("Authorization", 'Bearer ' + localStorage.getItem('id_token'));
        this.requestoptions = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            url: url,
            headers: this.headers,
            body: JSON.stringify(data)
        });
        return this.http.request(new http_1.Request(this.requestoptions))
            .map(function (res) {
            if (res.status === 201) {
                return [{ status: res.status, json: res }];
            }
            else if (res.status === 205) {
                return [{ status: res.status, json: res }];
            }
        })
            .catch(function (error) {
            if (error.status === 500) {
                return Rx_1.Observable.throw(new Error(error.status));
            }
            else if (error.status === 400) {
                return Rx_1.Observable.throw(new Error(error.status));
            }
            else if (error.status === 409) {
                return Rx_1.Observable.throw(new Error(error.status));
            }
            else if (error.status === 406) {
                return Rx_1.Observable.throw(new Error(error.status));
            }
            else if (error.status === 404) {
                return Rx_1.Observable.throw(new Error(error.status));
            }
        });
    };
    GlobalService.prototype.GetRequest = function (url) {
        return this.http.request(new http_1.Request(this.getRequsetOptions(url)))
            .map(function (res) {
            var jsonObj;
            if (res.status === 204) {
                jsonObj = null;
            }
            else if (res.status === 500) {
                jsonObj = null;
            }
            else if (res.status !== 204) {
                jsonObj = res.json();
            }
            return [{ status: res.status, json: jsonObj }];
        })
            .catch(function (error) {
            if (error.status === 403) {
                return Rx_1.Observable.throw(new Error(error.status));
            }
            else if (error.status === 400) {
                return Rx_1.Observable.throw(new Error(error.status));
            }
        });
    };
    GlobalService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_deprecated_1.Router])
    ], GlobalService);
    return GlobalService;
}());
exports.GlobalService = GlobalService;

//# sourceMappingURL=GlobalService.js.map
