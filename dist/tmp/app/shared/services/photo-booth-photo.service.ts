export class Photo {
	private _filter: string;
	private _photoSrc: string;
	private _originalPhotoSrc: string;
	constructor() {
		this.filter = '';
		this.photoSrc = '';
	}
	set filter( filter: string ) {
		this._filter = filter;
	}
	get filter(): string {
		return this._filter;
	}
	set photoSrc( photoSrc: string) {
		this._photoSrc = photoSrc;
	}
	get photoSrc(): string {
		return this._photoSrc;
	}
	set originalPhotoSrc(originalPhotoSrc: string){
		this._originalPhotoSrc = originalPhotoSrc;
	}
	get originalPhotoSrc(): string{
		return this._originalPhotoSrc;
	}
	resetPhoto() {
		this.filter = '';
		this.photoSrc = '';
		this.originalPhotoSrc = '';
	}
};
