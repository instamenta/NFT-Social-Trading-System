import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftNftComponent } from './gift-nft.component';

describe('GiftNftComponent', () => {
  let component: GiftNftComponent;
  let fixture: ComponentFixture<GiftNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftNftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
