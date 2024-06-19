import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAotComponent } from './top-aot.component';

describe('TopAotComponent', () => {
  let component: TopAotComponent;
  let fixture: ComponentFixture<TopAotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopAotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopAotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
