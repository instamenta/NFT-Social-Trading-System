import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLitComponent } from './profile-lit.component';

describe('ProfileLitComponent', () => {
  let component: ProfileLitComponent;
  let fixture: ComponentFixture<ProfileLitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileLitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
