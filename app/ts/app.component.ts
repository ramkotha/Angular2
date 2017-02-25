import {config} from './config.servive';
import {Component} from 'angular2/core';
import {videos} from './Videos';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/ts/app.component.ts',
	directives: [PlaylistComponent]
})

export class AppComponent {
	MainHeading = config.MAIN_HEADING;
	videos:Array<video>;


	constructor(){

		this.Videos =[
			new Video(1,"Learn Angular2","","How to study and learn Angular2"),
			new Video(1,"Learn Angular2-1 ","","How to study and learn Angular2"),


		]

	}


}
