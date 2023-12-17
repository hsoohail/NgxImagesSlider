import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import {scaleIn, scaleOut} from "./animations";

@Component({
  selector: 'ngx-ngx-basic-images-slider',
  templateUrl: './ngx-ngx-basic-images-slider.component.html',
  styleUrls: ['./ngx-ngx-basic-images-slider.component.scss'],
  animations: [
    trigger(
      "carouselAnimation", [
        transition("0 => 1", [useAnimation(scaleIn, {params: { time: '500ms' }} )]),
        transition("1 => 0", [useAnimation(scaleOut, {params: { time: '500ms' }})]),
      ]
    )
  ]
})
export class NgxBasicImagesSliderComponent implements OnInit, AfterViewInit {
  @Input() Images: string[] = [];
  @Input() Height: string | null = null;
  @Input() SvgNextIcon: string | null = null;
  @Input() SvgPreviousIcon: string | null = null;
  @Input() PreviewContainerClass: string | null = null;
  @Input() PreviewImageClass: string | null = null;
  @Input() ThumbnailsRowClass: string | null = null;
  @Input() ThumbnailContainerClass: string | null = null;
  @Input() ThumbnailImageClass: string | null = null;

  selected = "";
  showLeftArrow = false;
  showRightArrow = false;
  animate = false;
  thumbnailsRow: HTMLElement | undefined = undefined;
  thumbnailsRowScrolledDistance = 0;

  ngOnInit() {
    if(this.Images.length > 0) this.selected = this.Images[0];
  }

  ngAfterViewInit() {
    const rowElement = document.getElementById("thumbnails-row");
    if(rowElement) {
      this.thumbnailsRow = rowElement;
      if(rowElement.scrollWidth > rowElement.clientWidth) this.showRightArrow = true;
    }
  }

  selectImage(img: string) {
    this.selected = img;
    this.animate = true;
    setTimeout(() => {
      this.animate = false;
    }, 1);
  }

  onNavRightClick() {
    if(this.thumbnailsRow) {
      this.thumbnailsRow.scrollBy({ left: 10 });
      this.thumbnailsRowScrolledDistance += 10;
      if(this.thumbnailsRowScrolledDistance + this.thumbnailsRow.clientWidth > this.thumbnailsRow.scrollWidth){
        this.showRightArrow = false;
        this.showLeftArrow = true;
      }
    }
  }

  onNavLeftClick() {
    if(this.thumbnailsRow) {
      this.thumbnailsRow.scrollBy({ left: -10 });
      this.thumbnailsRowScrolledDistance -= 10;
      if(this.thumbnailsRowScrolledDistance <= 0) {
        this.showLeftArrow = false;
        this.showRightArrow = true;
      }

    }
  }
}
