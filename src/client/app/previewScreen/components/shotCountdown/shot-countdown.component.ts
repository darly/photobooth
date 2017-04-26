import {Component, OnInit, NgZone, OnDestroy} from '@angular/core';
import {PhotoBoothStatus} from '../../../shared/services/photo-booth-status.service';
import {TYPES} from '../../../shared/services/photo-booth-status-names.service';
import {WebcamJsService} from '../../../shared/services/web-cam-js.service';

@Component({
	moduleId: module.id,
	selector: 'pb-shot-countdown',
	templateUrl: 'shot-countdown.component.html',
	styleUrls: ['shot-countdown.component.css']
})

export class ShotCountdownComponent implements OnInit, OnDestroy {
	public isPictureMode: boolean;
	public countdownValue: number;
	private _countdownInterval: any;
	private _subscription: any;

	constructor(
		private _photoBoothStatus: PhotoBoothStatus,
		private _webcamJs: WebcamJsService
	) {
		this.isPictureMode = false;
		this.countdownValue = 3;
	}

	setIsPictureMode() {
		this.isPictureMode = this._photoBoothStatus.isPictureMode;
		this.checkIfPictureMode();
	}
	ngOnInit() {
		this.setIsPictureMode();
		this._subscription = this._photoBoothStatus.stausChange$.subscribe(
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
		this._countdownInterval = setInterval( () =>{
			this.countdown();
		}, 1000);
	}
	//the countdown logic
	countdown(){
		//if the count down is 1 then 3 seconds have passed
		if (this.countdownValue === 1) {
			clearInterval(this._countdownInterval);
			this._webcamJs.takePicture();
			this._photoBoothStatus.changeStatus(TYPES.EDITMODE.MODENAME);
		} else {
			this.countdownValue--;
		}
	}
	ngOnDestroy() {
		this._subscription.unsubscribe();
	}
}
