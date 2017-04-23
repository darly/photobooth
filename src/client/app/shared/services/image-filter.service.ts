import { Injectable } from '@angular/core';
import {Photo} from '../../shared/services/photo-booth-photo.service';
import {FILTER} from '../../shared/services/caman-filter-names.service';
declare var Caman: any;
declare var document: any;

@Injectable()
export class ImageFilter {
	private _selectedPhoto: Photo;
	public selectedImage: any;
	public selectedFilter: string = '';
	set selectedPhoto(selectedPhoto: Photo){
		this._selectedPhoto = selectedPhoto;
	}
	get selectedPhoto(): Photo{
		return this._selectedPhoto;
	}
	//adds filter to the carousel images
	addFilter( elem: any, imageUrl:string, filter?: string ) {
		Caman( elem, imageUrl, function(){
			if(typeof filter === 'string'){
				this[filter]();
			}
			this.render();
		});
	}
	//applies filter to the selected image on the edit screen
	applyFilter( newFilter: string ) {
		var that: any = this;
		if( FILTER.indexOf(newFilter) !== -1 ){
			document.getElementById('loader').style.display = 'flex';
			this.selectedImage.revert();
			this.selectedImage[newFilter]();
			this.selectedImage.render(function(){
				that.selectedPhoto.filter = newFilter;
				that.selectedPhoto.photoSrc = this.toBase64();
				document.getElementById('loader').style.display = 'none';
			});
		}
	}
	//updates the selected image
	updateSelectedImage(elem: any, imageUrl: string ) {
		this.selectedImage = Caman( elem, imageUrl );
	}
	//remove the filter from the selected image
	removeFilterFromSelectedImage(){
		this.selectedImage.revert();
		this.selectedImage.render();

		this.selectedPhoto.filter = '';
	}
};
