import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {PhotoBoothStatus} from '../../shared/services/photo-booth-status.service';
import {TYPES} from '../../shared/services/photo-booth-status-names.service';
import {LangText} from '../../shared/services/lang-text.service';

@Component({
	moduleId: module.id,
	selector: 'pb-config-screen',
	templateUrl: 'config-screen.component.html',
	styleUrls: ['config-screen.component.css']
})

export class ConfigScreenConponent{
	private _splashScreenToggleText: string;

	constructor(
		private _router: Router,
		private _photoBoothStatus: PhotoBoothStatus,
		private _langText: LangText
	) {
		this.setConfigDefault();
	}

	goToSplash(): void {
		this._router.navigate(['SplashScreen']);
		this._photoBoothStatus.changeStatus(TYPES.SPLASHSCREEN.MODENAME);
	}
	goToConfigWelcome(): void {

	}
	saveConfig(): void{

	}
	splashScreenToggle(e: any): void{
		if( e.currentTarget.classList.contains('active') ){
			this.splashScreenToggleText = 'Show';
		} else {
			this.splashScreenToggleText = 'Hide';
		}
	}
	hideSplashScreenConfig(): boolean{
		if(this.splashScreenToggleText === 'Hide'){
			return true;
		}
		return false;
	}
	setConfigDefault(): void{
		this.splashScreenToggleText = 'Show';
	}
	get splashScreenToggleText(): string{
		return this._splashScreenToggleText;
	}
	set splashScreenToggleText(splashScreenToggleText:string){
		this._splashScreenToggleText = splashScreenToggleText;
	}
};
