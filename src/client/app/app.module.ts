import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {ConfigWelcomeScreenConponent} from './configScreen/components/configWelcomeScreen/config-welcome-screen.component';
import {ConfigScreenConponent} from './configScreen/components/config-screen.component';
import {SplashScreenComponent} from  './splashScreen/components/splash-screen.component';
import {PreviewScreenComponent} from './previewScreen/components/preview-screen.component';
import {PreviewPhotoStripComponent} from './previewScreen/components/PreviewPhotoStrip/preview-photo-strip.component';
import {ShotCountdownComponent} from './previewScreen/components/ShotCountdown/shot-countdown.component';
import {EditScreenComponent} from './editScreen/components/edit-screen.component';
import {FilterCarousel} from './imageFilter/components/filter-carousel.component';

//Adding the components
@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ConfigWelcomeScreenConponent,
    ConfigScreenConponent,
    SplashScreenComponent,
    PreviewScreenComponent,
    EditScreenComponent,
    PreviewPhotoStripComponent,
    ShotCountdownComponent,
    FilterCarousel
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
