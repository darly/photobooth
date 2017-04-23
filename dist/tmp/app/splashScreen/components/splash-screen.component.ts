import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {PhotoBoothStatus} from '../../shared/services/photo-booth-status.service';
import {TYPES} from '../../shared/services/photo-booth-status-names.service';
import {LangText} from '../../shared/services/lang-text.service';

@Component({
	moduleId: module.id,
	selector: 'pb-splash-screen',
	templateUrl: 'splash-screen.component.html',
	styleUrls: ['splash-screen.component.css']
})

export class SplashScreenComponent {
	private _takePicText: string;

	constructor(
		private _router: Router,
		private _photoBoothStatus: PhotoBoothStatus,
		private _langText: LangText
	) {}

	goToPreview( lang: string ): void {
		this._langText.selectedLang = lang;
		this._router.navigate(['PreviewScreen']);
		this._photoBoothStatus.changeStatus(TYPES.PREVIEWMODE.MODENAME);
	}
};
