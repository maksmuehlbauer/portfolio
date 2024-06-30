import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgSendSuccComponent } from './msg-send-succ.component';

describe('MsgSendSuccComponent', () => {
  let component: MsgSendSuccComponent;
  let fixture: ComponentFixture<MsgSendSuccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsgSendSuccComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsgSendSuccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
