import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ChatComponent } from './chat.component';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;
  let messagesHTMLElement: HTMLElement;
  let senderHTMLElement: HTMLElement;
  let recipientHTMLElement: HTMLElement;
  let inputTextHTMLElement: HTMLElement;
  let sendHTMLElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;

    messagesHTMLElement = getHTMLElement('.messages');
    senderHTMLElement = getHTMLElement('.sender');
    recipientHTMLElement = getHTMLElement('.recipient');
    inputTextHTMLElement = getHTMLElement('.text');
    sendHTMLElement = getHTMLElement('.send');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    expect(messagesHTMLElement).toBeTruthy();
    expect(senderHTMLElement).toBeTruthy();
    expect(recipientHTMLElement).toBeTruthy();
    expect(inputTextHTMLElement).toBeTruthy();
    expect(sendHTMLElement).toBeTruthy();
  });

  it('should display new sender', () => {
    component.sender = 'bob';
    fixture.detectChanges();

    expect(senderHTMLElement.textContent).toContain('Bob');
  });

  it('should display new recipient', () => {
    component.recipient = 'alice';
    fixture.detectChanges();

    expect(recipientHTMLElement.textContent).toContain('Alice');
  });

  it('should display new chat history', () => {
    component.chatHistory = [
      {
        date: new Date("July 21, 1983 01:15:00"),
        recipient: 'bob',
        sender: 'alice',
        text: 'hellooo'
      },
      {
        date: new Date("July 21, 1983 01:16:00"),
        recipient: 'alice',
        sender: 'bob',
        text: 'hi'
      },
    ];
    fixture.detectChanges();

    let messageNodes = getAllNodes('app-message');

    expect(messageNodes.length).toBe(2);
  });

  it('should dispatch event on click on "send" button', () => {
    spyOn(component.sendMessage, "emit");
    sendHTMLElement.dispatchEvent(new Event("click"));
    expect(component.sendMessage.emit).toHaveBeenCalled();
  });

  const getHTMLElement = (selector: string): HTMLElement => {
    return fixture.nativeElement.querySelector(selector);
  }

  const getAllNodes = (selector: string): NodeList => {
    return fixture.nativeElement.querySelectorAll(selector);
  }
});
