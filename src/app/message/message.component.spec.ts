import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';

const text = 'hello';
const sender = 'Jim';
const recipient = 'John';
const date = new Date("July 21, 1983 01:15:00");

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    component.message = { date, recipient, sender, text }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display text message', () => {
    let textElement: HTMLElement = fixture.nativeElement.querySelector('.text');

    expect(textElement.textContent).toContain(text);
  });

  it('should display date of message', () => {
    let dateElement: HTMLElement = fixture.nativeElement.querySelector('.date');

    const hours = date.getHours();
    const minutes = date.getMinutes();
    expect(dateElement.textContent).toContain(`${hours}:${minutes}`);
  });
});
