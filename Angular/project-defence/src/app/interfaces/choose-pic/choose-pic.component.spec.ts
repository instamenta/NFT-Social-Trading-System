import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePicComponent } from './choose-pic.component';

describe('ChoosePicComponent', () => {
  let component: ChoosePicComponent;
  let fixture: ComponentFixture<ChoosePicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosePicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
