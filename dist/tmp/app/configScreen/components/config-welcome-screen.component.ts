import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {PhotoBoothStatus} from '../../shared/services/photo-booth-status.service';
import {TYPES} from '../../shared/services/photo-booth-status-names.service';
import {LangText} from '../../shared/services/lang-text.service';

@Component({
	moduleId: module.id,
	selector: 'pb-config-screen',
	templateUrl: 'config-welcome-screen.component.html',
	styleUrls: ['config-welcome-screen.component.css']
})

export class ConfigWelcomeScreenConponent{
	constructor(
		private _router: Router,
		private _photoBoothStatus: PhotoBoothStatus,
		private _langText: LangText
	) {}

	goToSplash(): void {
		this._router.navigate(['SplashScreen']);
		this._photoBoothStatus.changeStatus(TYPES.SPLASHSCREEN.MODENAME);
	}
	goToConfig(): void {
		this._router.navigate(['ConfigScreen']);
		this._photoBoothStatus.changeStatus(TYPES.CONFIGMODE.MODENAME);
	}
};
