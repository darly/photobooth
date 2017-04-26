import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConfigWelcomeScreenConponent} from './configScreen/components/configWelcomeScreen/config-welcome-screen.component';
import {ConfigScreenConponent} from './configScreen/components/config-screen.component';
import {SplashScreenComponent} from  './splashScreen/components/splash-screen.component';
import {PreviewScreenComponent} from './previewScreen/components/preview-screen.component';
import {EditScreenComponent} from './editScreen/components/edit-screen.component';

//configuring the routes
const routes: Routes = [
	{path: '', component: ConfigWelcomeScreenConponent},
	{path: 'ConfigScreen', component: ConfigScreenConponent},
	{path: 'SplashScreen', component: SplashScreenComponent},
	{path: 'PreviewScreen', component: PreviewScreenComponent},
	{path: 'EditScreen/:stripIndex', component: EditScreenComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
