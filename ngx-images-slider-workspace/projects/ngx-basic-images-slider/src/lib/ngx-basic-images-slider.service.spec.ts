import { TestBed } from '@angular/core/testing';

import { NgxBasicImagesSliderService } from './ngx-basic-images-slider.service';

describe('NgxBasicImagesSliderService', () => {
  let service: NgxBasicImagesSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBasicImagesSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
