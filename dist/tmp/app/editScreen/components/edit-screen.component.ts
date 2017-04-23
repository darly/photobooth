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

export class EditScreenComponent implements /*OnActivate,*/ AfterViewInit, OnInit, OnDestroy {
	private _subscription: any;
	private sub: any;
	private id: any;
	public isFilterMode: boolean;
	public selectedPhoto: Photo;
	public _filterAccept: string;
	public _filterCancel: string;
	public _keepImgText: string;
	public _retakeText: string;
	public _goToFilterText: string;

	@ViewChild('selectedImage') selectedImage: ElementRef;
	@ViewChild('tests') test: ElementRef;

	constructor(
		private route: ActivatedRoute,
		private _photoStrip: PhotoStrip,
		private _router: Router,
		private _photoBoothStatus: PhotoBoothStatus,
		private _langText: LangText,
		private _imageFilter: ImageFilter,
		private router:Router
	) {
		this.filterAccept = this._langText.getText(LANG.TYPES.keepFilter);
		this.filterCancel = this._langText.getText(LANG.TYPES.cancelFilter);

		this.keepImgText = this._langText.getText(LANG.TYPES.KeepImg);
		this.retakeText = this._langText.getText(LANG.TYPES.retake);
		this.goToFilterText = this._langText.getText(LANG.TYPES.goToFilter);

		this.router.events.subscribe((event) => {
	    if(event instanceof NavigationStart) {
				this.setSelectedPhoto();
	    }
	  });
	}
	setSelectedPhoto (){
		var id: number = this.urlId;
		this.selectedPhoto = this._photoStrip.strip[id];
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
	stringToArrayOfString(str: string): Array<string> {
		var arrOfStr: Array<string> = [];
		for (var i = 0; i < str.length; i++ ){
			arrOfStr.push(str[i]);
		}
		return arrOfStr;
	}
	/*routerOnActivate() {
		//var id: number = this.getUrlId();
		var id: number = this.urlId();
		this.selectedPhoto = this._photoStrip.strip[id];
	}*/
	set urlId( id: any ){
		this.id = id;
	}
	get urlId(): any {
		return this.id;
	}

	ngAfterViewInit(){
		this._imageFilter.updateSelectedImage(this.selectedImage.nativeElement, this.selectedPhoto.originalPhotoSrc);
	}
	ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.urlId = +params['stripIndex']; // (+) converts string 'id' to a number
			 this.setSelectedPhoto();
       // In a real app: dispatch action to load the details here.
    });
		this.setIsFilterMode();
		this._subscription = this._photoBoothStatus.stausChange$.subscribe(
			status => this.setIsFilterMode()
		);
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
		this.sub.unsubscribe();
	}
};
