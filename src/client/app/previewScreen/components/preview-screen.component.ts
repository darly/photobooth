import {Component, AfterViewInit, OnInit, OnDestroy} from '@angular/core';
import {ShotCountdownComponent} from './ShotCountdown/shot-countdown.component';
import {PreviewPhotoStripComponent} from './PreviewPhotoStrip/preview-photo-strip.component';
import {PhotoBoothStatus} from '../../shared/services/photo-booth-status.service';
import {PhotoStrip} from '../../shared/services/photo-booth-photo-strip.service';
import {TYPES} from '../../shared/services/photo-booth-status-names.service';
import {WebcamJsService} from '../../shared/services/web-cam-js.service';
import {LangText} from '../../shared/services/lang-text.service';
import {Router} from '@angular/router';
import {LANG} from '../../shared/services/lang-text-values.service';

@Component({
	moduleId: module.id,
	selector: 'pb-preview-screen',
	templateUrl: 'preview-screen.component.html',
	styleUrls: ['preview-screen.component.css'],
	///*directives:*/ providers: [ShotCountdownComponent, PreviewPhotoStripComponent]
})

export class PreviewScreenComponent implements AfterViewInit, OnInit, OnDestroy {
	private _subscription: any;
	private _previewBtnText: string;
	private _startOverText: string;
	public isPreviewMode: boolean;

	constructor(
		private _photoBoothStatus: PhotoBoothStatus,
		private _webcamJsService: WebcamJsService,
		private _langText: LangText,
		private _photoStrip: PhotoStrip,
		private _router: Router
	) {
		//based on the langugue choosen we set the langugue
		if(this._photoStrip.getNextEmptyPhotoNumber() !== -1){
			this.takePicText = this._langText.getText(LANG.TYPES.previewBtn);
		} else {
			this.takePicText = this._langText.getText(LANG.TYPES.printBtn);
		}
		this.startOverText = this._langText.getText(LANG.TYPES.startOverBtn);
	}
	//started to play around with setters and getters but now i under stand that they should only be used
	//when a parent component wants to change something
	//TODO remove setters and getters
	get previewBtnText(): string {
		return this._previewBtnText;
	}
	set takePicText(previewBtnText: string) {
		this._previewBtnText = previewBtnText;
	}

	get startOverText(): string {
		return this._startOverText;
	}
	set startOverText(startOverText: string) {
		this._startOverText = startOverText;
	}
	//we listen to the isPreviewMode event
	ngOnInit() {
		this.setIsPreviewMode();
		this._subscription = this._photoBoothStatus.stausChange$.subscribe(
			status => this.setIsPreviewMode()
		);
	}
	ngAfterViewInit() {
		this._webcamJsService.startStreaming();
	}
	//gets the new value from the services and forces
	setIsPreviewMode() {
		this.isPreviewMode = this._photoBoothStatus.isPreviewMode;
	}
	//the preview button callback
	previewBtnCB(){
		//we check if there is any more avaalible slots to take pictures
		//if there isnt we0

		if (this._photoStrip.getNextEmptyPhotoNumber() !== -1) {
			this.takePicture();
		} else {
			this.printStrip();
		}
	}
	//we change the mode in the preview screen
	takePicture() {
		this._photoBoothStatus.changeStatus(TYPES.PICTUREMODE.MODENAME);
	}
	//to print all we do is call on the print screen
	printStrip(){
		window.print();
	}
	//to start over we reset the the strip and take the user back to the SplashScreen
	startOver(){
		this._photoStrip.resetStrip();
		this._photoBoothStatus.changeStatus(TYPES.SPLASHSCREEN.MODENAME);
		this._router.navigate(['SplashScreen']);
	}
	ngOnDestroy() {
		this._subscription.unsubscribe();
	}
};
