import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'
/*
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
*/

import {ConfigWelcomeScreenConponent} from './configScreen/components/config-welcome-screen.component';
import {ConfigScreenConponent} from './configScreen/components/config-screen.component';
import {SplashScreenComponent} from  './splashScreen/components/splash-screen.component';
import {PreviewScreenComponent} from './previewScreen/components/preview-screen.component';
import {PreviewPhotoStripComponent} from './previewScreen/components/preview-photo-strip.component';
import {ShotCountdownComponent} from './previewScreen/components/shot-countdown.component';
import {EditScreenComponent} from './editScreen/components/edit-screen.component';
import {filterCarousel} from './imageFilter/components/filter-carousel.component';

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
    filterCarousel
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
