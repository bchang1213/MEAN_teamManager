import { Component, OnInit } from '@angular/core';
import { Player } from './../../player';
import { PlayersService } from './../../players.service';
import { Router } from '@angular/router'

@Component({
	selector: 'app-new',
	templateUrl: './new.component.html',
	styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
	player: Player;

	constructor(private _playersService:PlayersService, private _router: Router) { }

	ngOnInit() {
		this.player = new Player();
	}

	onSubmit(){
		console.log("Form submitted:", this.player);
		this._playersService.saveToDB(this.player)
		.then((data)=>{
			console.log('successfully saved. then:', data);
			if(data.errors == undefined){
				this._router.navigate(['players', 'list'])
			}
		})
		.catch((error)=>{
			console.log('catch:', error);
		})
	}
}
