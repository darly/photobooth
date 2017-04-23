import {Component, ViewChild, ElementRef, AfterViewInit, OnInit, OnDestroy} from '@angular/core';
import {Router, NavigationStart, /*OnActivate,*/ ActivatedRoute, Event } from '@angular/router';
import {Photo} from '../../shared/services/photo-booth-photo.service';
import {PhotoStrip} from '../../shared/services/photo-booth-photo-strip.service';
import {PhotoBoothStatus} from '../../shared/services/photo-booth-status.service';
import {TYPES} from '../../shared/services/photo-booth-status-names.service';
import {LangText} from '../../shared/services/lang-text.service';
import {LANG} from '../../shared/services/lang-text-values.service';
import {ImageFilter} from '../../shared/services/image-filter.service';


@Component({
	moduleId: module.id,
	selector: 'pb-edit-screen',
	templateUrl: 'edit-screen.component.html',
	styleUrls: ['edit-screen.component.css']
})

export class EditScreenComponent implements AfterViewInit, OnInit, OnDestroy {
	private _subscription: any;
	private _sub: any;
	private _id: any;
	private _filterAccept: string;
	private _filterCancel: string;
	private _keepImgText: string;
	private _retakeText: string;
	private _goToFilterText: string;
	public isFilterMode: boolean;
	public selectedPhoto: Photo;

	@ViewChild('selectedImage') selectedImage: ElementRef;
	@ViewChild('tests') test: ElementRef;

	constructor(
		private _route: ActivatedRoute,
		private _photoStrip: PhotoStrip,
		private _router: Router,
		private _photoBoothStatus: PhotoBoothStatus,
		private _langText: LangText,
		private _imageFilter: ImageFilter
	) {
		this.filterAccept = this._langText.getText(LANG.TYPES.keepFilter);
		this.filterCancel = this._langText.getText(LANG.TYPES.cancelFilter);

		this.keepImgText = this._langText.getText(LANG.TYPES.KeepImg);
		this.retakeText = this._langText.getText(LANG.TYPES.retake);
		this.goToFilterText = this._langText.getText(LANG.TYPES.goToFilter);

		this._router.events.subscribe((event) => {
	    if(event instanceof NavigationStart) {
				this.setSelectedPhoto();
	    }
	  });
	}
	set keepImgText(keepImgText:string){
		this._keepImgText = keepImgText;
	}
	get keepImgText():string {
		return this._keepImgText;
	}

	set retakeText(retakeText:string) {
		this._retakeText = retakeText;
	}
	get retakeText(): string {
		return this._retakeText;
	}

	set goToFilterText(goToFilterText:string) {
		this._goToFilterText = goToFilterText;
	}
	get goToFilterText(): string {
		return this._goToFilterText;
	}

	set filterAccept(filterAccept: string) {
		this._filterAccept = filterAccept;
	}
	get filterAccept(): string {
		return this._filterAccept;
	}
	set filterCancel(filterCancel: string) {
		this._filterCancel = filterCancel;
	}
	get filterCancel(): string {
		return this._filterCancel;
	}
	set urlId( id: any ){
		this._id = id;
	}
	get urlId(): any {
		return this._id;
	}

	ngAfterViewInit(){
		this._imageFilter.updateSelectedImage(this.selectedImage.nativeElement, this.selectedPhoto.originalPhotoSrc);
	}
	ngOnInit() {
    this._sub = this._route.params.subscribe(params => {
       this.urlId = +params['stripIndex']; // (+) converts string 'id' to a number
			 this.setSelectedPhoto();
    });
		this.setIsFilterMode();
		this._subscription = this._photoBoothStatus.stausChange$.subscribe(
			status => this.setIsFilterMode()
		);
	}
	setSelectedPhoto (){
		var id: number = this.urlId;
		this.selectedPhoto = this._photoStrip.strip[id];
	}
	stringToArrayOfString(str: string): Array<string> {
		var arrOfStr: Array<string> = [];
		for (var i = 0; i < str.length; i++ ){
			arrOfStr.push(str[i]);
		}
		return arrOfStr;
	}
	retakePicture() {
		this.selectedPhoto.resetPhoto();
		this._photoBoothStatus.changeStatus(TYPES.PICTUREMODE.MODENAME);
		this._router.navigate(['PreviewScreen']);
	}
	keepPicture() {
		this._photoBoothStatus.changeStatus(TYPES.PREVIEWMODE.MODENAME);
		this._router.navigate(['PreviewScreen']);
	}
	saveSelectedFilter(){
		this._photoStrip.strip[this.urlId] = this._imageFilter.selectedPhoto;
		this.goToEditMode();
	}
	removeSelectedFilter(){
		this.selectedPhoto.filter = '';
		this._imageFilter.removeFilterFromSelectedImage();

		this.goToEditMode();
	}
	goToFilterMode(){
		this._imageFilter.updateSelectedImage(this.selectedImage.nativeElement, this.selectedPhoto.originalPhotoSrc);
		this._imageFilter.selectedPhoto = this.selectedPhoto;
		this._photoBoothStatus.changeStatus(TYPES.FILTERMODE.MODENAME);
	}
	goToEditMode() {
		this._photoBoothStatus.changeStatus(TYPES.EDITMODE.MODENAME);
	}
	setIsFilterMode(){
		this.isFilterMode = this._photoBoothStatus.isFilterMode;
	}
	ngOnDestroy() {
		this._subscription.unsubscribe();
		this._sub.unsubscribe();
	}
};
