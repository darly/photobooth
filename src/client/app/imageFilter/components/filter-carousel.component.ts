import {Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, NgModule} from '@angular/core';
import {FILTER} from '../../shared/services/caman-filter-names.service';
import {ImageFilter} from '../../shared/services/image-filter.service';
import {PhotoBoothStatus} from '../../shared/services/photo-booth-status.service';

@Component({
	moduleId: module.id,
	selector: 'pb-image-filter',
	templateUrl: 'filter-carousel.component.html',
	styleUrls: ['filter-carousel.component.css']
})
export class FilterCarousel implements OnInit, OnDestroy, AfterViewInit {
	private _subscription: any;
	public filters: Array<string> = FILTER;
	public isFilterMode: boolean

	@ViewChild('filtersHolder') filterHolder: ElementRef;

	constructor(
		private _photoBoothStatus: PhotoBoothStatus,
		private _imageFilter: ImageFilter
	) {}
	applyFilter(filter: string) {
		this._imageFilter.applyFilter(filter);
	}
	ngOnInit() {
		this.setIsFilterMode();
		this._subscription = this._photoBoothStatus.stausChange$.subscribe(
			status => {
				this.setIsFilterMode();
			}
		);
	}
	ngAfterViewInit(){
		var filterImages = this.filterHolder.nativeElement.querySelectorAll('.filter-holder canvas');

		for (var i = 0; i < filterImages.length; i++){
			this._imageFilter.addFilter(
				filterImages[i],
				'assets/images/filter_image.jpg',
				filterImages[i].getAttribute('data-filter_name')
			);
		}
	}
	ngOnDestroy() {
		this._subscription.unsubscribe();
	}
	setIsFilterMode(){
		this.isFilterMode = this._photoBoothStatus.isFilterMode;
	}
}
