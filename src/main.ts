import 'rxjs/Rx';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {provide, PLATFORM_DIRECTIVES, enableProdMode} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {AppComponent} from './app';
import { GlobalService } from './GlobalService';

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, GlobalService, provide(LocationStrategy, { useClass: HashLocationStrategy }), provide(PLATFORM_DIRECTIVES, { useValue: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES], multi: true })]);
