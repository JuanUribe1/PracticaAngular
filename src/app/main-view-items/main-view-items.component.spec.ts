import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewItemsComponent } from './main-view-items.component';

describe('MainViewItemsComponent', () => {
  let component: MainViewItemsComponent;
  let fixture: ComponentFixture<MainViewItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainViewItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
