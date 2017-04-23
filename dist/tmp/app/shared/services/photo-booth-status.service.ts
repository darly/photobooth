import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/share';
import {TYPES} from '../../shared/services/photo-booth-status-names.service';

@Injectable()
export class PhotoBoothStatus {
	public stausChange$: Observable<string>;
	private status: string;
	private _observer: Observer<string>;

	constructor() {
		this.stausChange$ = new Observable(
			(observer:any) => this._observer = observer).share();
		// share() allows multiple subscribers
		this.status = TYPES.SPLASHSCREEN.MODENAME;
	}
	get isPictureMode(): boolean{
		return this.getStatus() === TYPES.PICTUREMODE.MODENAME;
	}
	get isEditMode(): boolean {
		return this.getStatus() === TYPES.EDITMODE.MODENAME;
	}
	get isPreviewMode(): boolean {
		return this.getStatus() === TYPES.PREVIEWMODE.MODENAME;
	}
	get isFilterMode(): boolean {
		return this.getStatus() === TYPES.FILTERMODE.MODENAME;
	}
	changeStatus ( newStatus: string ) {
		this.status = newStatus;
		if ( this._observer && this._observer.next ) {
			this._observer.next( newStatus );
		}
	}
	getStatus(): string {
		return this.status;
	}
};
