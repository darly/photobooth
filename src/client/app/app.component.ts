import {Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PhotoBoothStatus} from './shared/services/photo-booth-status.service';
import {WebcamJsService} from './shared/services/web-cam-js.service';
import {PhotoStrip} from './shared/services/photo-booth-photo-strip.service';
import {ImageFilter} from './shared/services/image-filter.service';
import {LangText} from './shared/services/lang-text.service';

//adding services
@Component({
	selector: 'pb-app',
	moduleId: module.id,
  templateUrl: 'app.component.html',
	providers: [PhotoBoothStatus, WebcamJsService, PhotoStrip, LangText, ImageFilter]
})
export class AppComponent {}
