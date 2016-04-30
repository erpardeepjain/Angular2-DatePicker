import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {Tab} from '../tab/tab'

@Component({
	selector: 'breadcrumb',
	templateUrl: 'src/Angular2-components/breadcrumb/breadcrumb.html',
	directives: [Tab, CORE_DIRECTIVES]
})
export class Breadcrumb {
	constructor() { }
}