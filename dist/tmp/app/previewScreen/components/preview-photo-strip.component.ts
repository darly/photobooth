import {Component, OnInit, OnDestroy} from '@angular/core';
import {PhotoBoothStatus} from '../../shared/services/photo-booth-status.service';
import {PhotoStrip} from '../../shared/services/photo-booth-photo-strip.service';
import {Photo} from '../../shared/services/photo-booth-photo.service';
import {Router} from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'pb-preview-photo-strip',
	templateUrl: 'preview-photo-strip.component.html',
	styleUrls: ['preview-photo-strip.component.css']
})

export class PreviewPhotoStripComponent implements OnInit, OnDestroy {
	public isPreviewMode: boolean;
	public photoStrip: Array<Photo>;
	private subscription: any;

	constructor(public photoBoothStatus: PhotoBoothStatus, public _photoStrip: PhotoStrip, private _router: Router) { }
	setIsPreviewMode() {
		this.isPreviewMode = this.photoBoothStatus.isPreviewMode;
	}
	ngOnInit() {
		this.setIsPreviewMode();
		this.photoStrip = this._photoStrip.strip;
		this.subscription = this.photoBoothStatus.stausChange$.subscribe(
			status => this.setIsPreviewMode()
		);
	}
	editImage( selectedPhoto: Photo, i: number ) {
		this._router.navigate(['EditScreen', i]);
	}
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
