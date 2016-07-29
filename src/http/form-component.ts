import {Component, ViewEncapsulation, OnInit } from '@angular/core';
import {CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators} from '@angular/common';

import {GlobalService} from '../GlobalService';

class DemoInfo {
	title: string;
	body: string;
	id: any;
	uid: any;
}

@Component({
	selector: 'form-component',
	templateUrl: './src/http/form-component.html'
})

export class FormComponent implements OnInit {
	CreateGroup: FormBuilder;
	demoInfo: DemoInfo;
	getData :Array<any> = [];
	
	constructor(fb: FormBuilder, private base_path_service: GlobalService) {
		this.demoInfo = new DemoInfo();

		this.CreateGroup = fb.group({
			'title': new Control(this.demoInfo.title, Validators.required),
			'body': new Control(this.demoInfo.body, Validators.required),
			'uid': new Control(this.demoInfo.uid, Validators.required),
			'id': new Control(this.demoInfo.id, Validators.required)
		})
	}
	ngOnInit() { this.API_getRequest(); }

	addNewGroup(demoInfo: demoInfo) {
		console.log(demoInfo, 'whole object');
		let url = 'http://jsonplaceholder.typicode.com/posts/';
		
		let data = {body:"quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto",id:101,
					title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",userId:101}
					
		this.base_path_service.PostRequest(url, demoInfo)
            .subscribe(res=> {
                console.log(res);
				alert('Data added with http status: ', res[0].status);
            },
            err=> {
                console.log(err);
            })

		this.demoInfo = new DemoInfo();
	}
	
	// Get Request
    API_getRequest() {
        let url_newEvent = 'http://jsonplaceholder.typicode.com/posts';
        this.base_path_service.GetRequest(url_newEvent)
            .subscribe(res=> {
                console.log(res);
				this.getData = res[0].json;
            },
            err=> {
                console.log(err);
            })
    }
    // Get Request
}