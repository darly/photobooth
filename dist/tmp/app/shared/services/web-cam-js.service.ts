import { Injectable } from '@angular/core';
import {PhotoStrip} from './photo-booth-photo-strip.service';
import {Router} from '@angular/router';
declare var Webcam: any;

@Injectable()

export class WebcamJsService{
	constructor( private _photoStrip: PhotoStrip, private _router: Router ) { }

	startStreaming() {
		Webcam.set({
			width: window.innerWidth - 40,
			height: window.innerHeight - 40,
			dest_width: 800,
			dest_height: 600,
			image_format: 'jpeg',
			jpeg_quality: 100,
			force_flash: false,
			flip_horiz: true,
			fps: 30
		});
		Webcam.attach('#livePreview');
	}

	stopStreaming() {
		Webcam.reset();
	}

	takePicture(){
		Webcam.snap( (dataUrl:string) => {
			var index:number = this._photoStrip.setNextEmptyPhoto(dataUrl);
			this._router.navigate(['EditScreen', index ]);
		});
	}
}
