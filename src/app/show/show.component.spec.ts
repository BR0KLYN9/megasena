import { ComponentFixture, TestBed } from '@angular/core/testing';

import { showComponent } from './show.component';

describe('showComponent', () => {
  let component: showComponent;
  let fixture: ComponentFixture<showComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [showComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(showComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
