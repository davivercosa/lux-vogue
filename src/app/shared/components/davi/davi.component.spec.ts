import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaviComponent } from './davi.component';

describe('DaviComponent', () => {
  let component: DaviComponent;
  let fixture: ComponentFixture<DaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DaviComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
