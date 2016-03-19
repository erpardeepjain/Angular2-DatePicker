import {Component, OnInit, provide} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common'
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {bootstrap} from 'angular2/platform/browser';

import {Datepicker} from './components/Datepicker/Datepicker'
import {Components} from './components/components'
import {Breadcrumb} from './breadcrumb/breadcrumb';
import {Tab} from './tab/tab';

@Component({
    selector: 'app',
    templateUrl: 'src/app.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, Breadcrumb, Tab]
})

@RouteConfig([
    // Components Routes //
    { path: '/components', component: Components, name: "Components" },
    { path: '/Datepicker', component: Datepicker, name: "Datepicker" }
])

class App implements OnInit {

    tabTitle: string = 'Date Picker';
}
bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);