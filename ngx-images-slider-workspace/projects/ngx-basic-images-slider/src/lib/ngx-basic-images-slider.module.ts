import { NgModule } from '@angular/core';
import { NgxBasicImagesSliderComponent } from './ngx-basic-images-slider.component';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    NgxBasicImagesSliderComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    NgxBasicImagesSliderComponent
  ]
})
export class NgxBasicImagesSliderModule { }
