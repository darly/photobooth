import {Component, OnInit, NgZone, OnDestroy} from '@angular/core';
import {PhotoBoothStatus} from '../../shared/services/photo-booth-status.service';
import {TYPES} from '../../shared/services/photo-booth-status-names.service';
import {WebcamJsService} from '../../shared/services/web-cam-js.service';

@Component({
	moduleId: module.id,
	selector: 'pb-shot-countdown',
	templateUrl: 'shot-countdown.component.html',
	styleUrls: ['shot-countdown.component.css']
})

export class ShotCountdownComponent implements OnInit, OnDestroy {
	public isPictureMode: boolean;
	public countdownValue: number;
	private countdownInterval: any;
	private subscription: any;

	constructor(private _photoBoothStatus: PhotoBoothStatus, private _webcamJs: WebcamJsService) {
		this.isPictureMode = false;
		this.countdownValue = 3;
	}
	setIsPictureMode() {
		this.isPictureMode = this._photoBoothStatus.isPictureMode;
		this.checkIfPictureMode();
	}
	ngOnInit() {
		this.setIsPictureMode();
		this.subscription = this._photoBoothStatus.stausChange$.subscribe(
			status => {
				this.setIsPictureMode();
			}
		);
	}
	checkIfPictureMode(){
		if (this.isPictureMode) {
			this.countdownValue = 3;
			this.startCountdownInterval();
		}
	}
	startCountdownInterval(){
		this.countdownInterval = setInterval( () =>{
			this.countdown();
		}, 1000);
	}
	countdown(){
		if (this.countdownValue === 1) {
			clearInterval(this.countdownInterval);
			this._webcamJs.takePicture();
			this._photoBoothStatus.changeStatus(TYPES.EDITMODE.MODENAME);
		} else {
			this.countdownValue--;
		}
	}
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
