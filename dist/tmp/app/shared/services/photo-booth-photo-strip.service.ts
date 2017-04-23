import {Photo} from './photo-booth-photo.service';

export class PhotoStrip {
	private _strip: Array<Photo>;
	private _selectedPhoto: number;
	//tells which is the next empty photo in the strip
	private _nextEmptyPhoto: number;
	constructor() {
		var strip: Array<Photo> = new Array();
		strip[0] = new Photo();
		strip[1] = new Photo();
		strip[2] = new Photo();
		this.strip = strip;
		this._nextEmptyPhoto = 0;
	}
	get strip(): Array<Photo> {
		return this._strip;
	}
	set strip( strip: Array<Photo> ) {
		this._strip = strip;
	}
	set selectedPhoto ( newSelectedPhoto: number ) {
		this._selectedPhoto = newSelectedPhoto;
	}
	get selectedPhoto(): number {
		return this._selectedPhoto;
	}
	//returns the index of the photo it set
	setNextEmptyPhoto( photoSrc: string ): number {
		var nextEmpty:number = this.getNextEmptyPhotoNumber();
		if( nextEmpty !== -1 ) {
			this.strip[nextEmpty].photoSrc = photoSrc;
			this.strip[nextEmpty].originalPhotoSrc = photoSrc;
		}
		return nextEmpty;
	}
	getNextEmptyPhotoNumber(): number {
		for (var i = 0; this._strip.length > i; i++) {
			if ( this.strip[i].photoSrc === '' ) {
				return i;
			}
		}
		return -1;
	}
	resetStrip() {
		for (var i = 0; this._strip.length > i; i++) {
			this.strip[i].resetPhoto();
		}
	}
};
