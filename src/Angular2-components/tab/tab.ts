import {Component, Attribute, Input} from '@angular/core';

@Component({
	selector: 'tab',
	inputs: ['name,icon,action', 'color'],
	templateUrl: 'src/Angular2-components/tab/tab.html',
	styleUrls: ['src/Angular2-components/tab/tab.css']
})

export class Tab {
	@Input() name: any;
	color: any;
	action: any;
	icon: any;
	constructor( @Attribute('name') name: String, @Attribute('icon') icon: String, @Attribute('action') action: String, @Attribute('color') color: String) {
		this.name = name;
		this.icon = icon;
		this.action = action;
		this.color = color;
	}
}

