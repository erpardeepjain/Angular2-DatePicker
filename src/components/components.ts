import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {Breadcrumb} from '../breadcrumb/breadcrumb';
import {Tab} from '../tab/tab';

@Component({
	selector: 'components',
	templateUrl: 'src/components/components.html',
	directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, Breadcrumb, Tab]
})

export class Components{
	
	constructor()
	{
		console.log('components called');
	}
}

