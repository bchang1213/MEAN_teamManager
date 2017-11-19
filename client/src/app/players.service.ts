import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class PlayersService {

	constructor(private _http: Http) { }

	saveToDB(playerObject){
		var playerSave = this._http.post("/create", playerObject);
		console.log("ran the service method for saving.");
		console.log(playerObject);
		var promiseObject = playerSave.map(Response=>Response.json()).toPromise();
		console.log(promiseObject);
		return promiseObject;
	}
}
