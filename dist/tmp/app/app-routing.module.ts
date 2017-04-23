import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConfigWelcomeScreenConponent} from './configScreen/components/config-welcome-screen.component';
import {ConfigScreenConponent} from './configScreen/components/config-screen.component';
import {SplashScreenComponent} from  './splashScreen/components/splash-screen.component';
import {PreviewScreenComponent} from './previewScreen/components/preview-screen.component';
import {EditScreenComponent} from './editScreen/components/edit-screen.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: '', component: ConfigWelcomeScreenConponent/*, name: 'ConfigWelcomeScreen', useAsDefault: true*/ },
	{ path: 'ConfigScreen', component: ConfigScreenConponent/*, name: 'ConfigScreen'*/},
	{ path: 'SplashScreen', component: SplashScreenComponent/*, name: 'SplashScreen'*/},
	{ path: 'PreviewScreen', component: PreviewScreenComponent/*, name: 'PreviewScreen'*/},
	{ path: 'EditScreen/:stripIndex', component: EditScreenComponent/*, name: 'EditScreen'*/ }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
