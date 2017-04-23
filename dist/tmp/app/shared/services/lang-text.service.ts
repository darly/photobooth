import { Injectable } from '@angular/core';
import { LANG } from '../../shared/services/lang-text-values.service';

@Injectable()
export class LangText {
	private _selectedLang: string;
	constructor(){
		this.selectedLang = 'ES';
	}
	set selectedLang( selectedLang: string ) {
		this._selectedLang = selectedLang;
	}
	get selectedLang() : string {
		return this._selectedLang;
	}
	getText( type: string ) :string {
		return LANG[this._selectedLang][type];
	}
}
