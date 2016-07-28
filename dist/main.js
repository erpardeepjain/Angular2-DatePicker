"use strict";
require('rxjs/Rx');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
var app_1 = require('./app');
var GlobalService_1 = require('./GlobalService');
platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [router_deprecated_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, GlobalService_1.GlobalService, core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }), core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: [router_deprecated_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES], multi: true })]);

//# sourceMappingURL=main.js.map
