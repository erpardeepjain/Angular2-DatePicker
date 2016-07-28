import {Injectable} from '@angular/core';
import {Control} from '@angular/common';
import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import {RouteConfig, Router} from "@angular/router-deprecated";
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

declare var jQuery: any;
declare var toastr: any;

@Injectable()
export class GlobalService {
    public headers: Headers;
    public requestoptions: RequestOptions;
    public res: Response;

    constructor(public http: Http, public router: Router) { }

    public getRequsetOptions(url: string): RequestOptions {
		this.headers = new Headers();
		this.headers.append("Content-type", "application/json");
		this.headers.append("Authorization", 'Bearer ' + localStorage.getItem('id_token'));


        this.requestoptions = new RequestOptions({
			method: RequestMethod.Get,
			url: url,
			headers: this.headers
		});

		return this.requestoptions;
    }

    public PostRequest(url: string, data: any): any {

		this.headers = new Headers();
		this.headers.append("Content-type", "application/json");
		this.headers.append("Authorization", 'Bearer ' + localStorage.getItem('id_token'));

		this.requestoptions = new RequestOptions({
			method: RequestMethod.Post,
			url: url,
			headers: this.headers,
			body: JSON.stringify(data)
		})

		return this.http.request(new Request(this.requestoptions))
			.map((res: Response) => {
				if (res.status === 201) {
					return [{ status: res.status, json: res }]
				}
				else if (res.status === 205) {
					return [{ status: res.status, json: res }]
				}
			})
			.catch((error: any) => {
				if (error.status === 500) {
					return Observable.throw(new Error(error.status));
				}
				else if (error.status === 400) {
					return Observable.throw(new Error(error.status));
				}
				else if (error.status === 409) {
					return Observable.throw(new Error(error.status));
				}
				else if (error.status === 406) {
					return Observable.throw(new Error(error.status));
				}
				else if (error.status === 404) {
					return Observable.throw(new Error(error.status));
				}
			});
	}

    public GetRequest(url: string): any {

		return this.http.request(new Request(this.getRequsetOptions(url)))
			.map((res: Response) => {
				let jsonObj: any;
				if (res.status === 204) {
					jsonObj = null;
				}
				else if (res.status === 500) {
					jsonObj = null;
				}
				else if (res.status !== 204) {
					jsonObj = res.json()
				}
				return [{ status: res.status, json: jsonObj }]
			})
			.catch(error => {
				if (error.status === 403) {
					return Observable.throw(new Error(error.status));
				}
				else if (error.status === 400) {
					return Observable.throw(new Error(error.status));
				}
			});
	}
}