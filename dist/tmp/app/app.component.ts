/*import { Component } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';

// This class represents the main application component.

@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}*/
import {Component} from '@angular/core';
//import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {Routes, RouterModule} from '@angular/router';
/*import {ConfigWelcomeScreenConponent} from './configScreen/components/config-welcome-screen.component';
import {ConfigScreenConponent} from './configScreen/components/config-screen.component';
import {SplashScreenComponent} from  './splashScreen/components/splash-screen.component';
import {PreviewScreenComponent} from './previewScreen/components/preview-screen.component';
import {EditScreenComponent} from './editScreen/components/edit-screen.component';*/
import {PhotoBoothStatus} from './shared/services/photo-booth-status.service';
import {WebcamJsService} from './shared/services/web-cam-js.service';
import {PhotoStrip} from './shared/services/photo-booth-photo-strip.service';
import {ImageFilter} from './shared/services/image-filter.service';
import {LangText} from './shared/services/lang-text.service';

//export const routes: Routes = [
	//{ path: '/', component: ConfigWelcomeScreenConponent/*, name: 'ConfigWelcomeScreen', useAsDefault: true*/ },
	//{ path: '/config', component: ConfigScreenConponent/*, name: 'ConfigScreen'*/},
	//{ path: '/splash', component: SplashScreenComponent/*, name: 'SplashScreen'*/},
	//{ path: '/preview', component: PreviewScreenComponent/*, name: 'PreviewScreen'*/},
	//{ path: '/edit/:stripIndex', component: EditScreenComponent/*, name: 'EditScreen'*/ }
//];

/*@RouteConfig([
		{ path: '/', component: ConfigWelcomeScreenConponent, name: 'ConfigWelcomeScreen', useAsDefault: true },
		{ path: '/config', component: ConfigScreenConponent, name: 'ConfigScreen'},
		{ path: '/splash', component: SplashScreenComponent, name: 'SplashScreen'},
		{ path: '/preview', component: PreviewScreenComponent, name: 'PreviewScreen'},
		{ path: '/edit/:stripIndex', component: EditScreenComponent, name: 'EditScreen' }
]);*/
@Component({
	selector: 'pb-app',
	moduleId: module.id,
  templateUrl: 'app.component.html',
	providers: [PhotoBoothStatus, WebcamJsService, PhotoStrip, LangText, ImageFilter]
})
export class AppComponent {}
