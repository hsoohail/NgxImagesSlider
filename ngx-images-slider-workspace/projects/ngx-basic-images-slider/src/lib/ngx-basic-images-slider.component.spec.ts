import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBasicImagesSliderComponent } from './ngx-basic-images-slider.component';

describe('NgxBasicImagesSliderComponent', () => {
  let component: NgxBasicImagesSliderComponent;
  let fixture: ComponentFixture<NgxBasicImagesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxBasicImagesSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxBasicImagesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
