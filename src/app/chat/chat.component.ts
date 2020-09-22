import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent implements AfterViewInit, AfterViewChecked, OnChanges {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  @Input()
  chatHistory: Message[];
  @Input()
  sender: string;
  @Input()
  recipient: string;
  @Output()
  sendMessage = new EventEmitter<Message>();

  inputText: string = "";
  scrollToBottomAfterChange = false;

  constructor() {
  }

  ngOnChanges(): void {
    this.scrollToBottomAfterChange = true;
  }

  ngAfterViewChecked(): void {
    if (this.scrollToBottomAfterChange) {
      this.scrollToBottom();
    }
  }

  ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
      try {
        this.myScrollContainer['SimpleBar'].getScrollElement().scrollTop = this.myScrollContainer['SimpleBar'].getScrollElement().scrollHeight;
        this.scrollToBottomAfterChange = false;
      } catch(err) {}
  }

  onKeyDown(event: KeyboardEvent): void {
    if (this.pressedEnterKey(event) && this.didNotPressShiftKey(event)) {
      event.preventDefault();
      if (!this.inputTextIsEmpty()) {
        this.doSendMessage();
      }
    } else if (this.pressedSpaceKey(event) && this.inputTextIsEmpty()) {
      event.preventDefault();
    }
  }

  onPaste(event: ClipboardEvent): void {
    if (this.inputTextIsEmpty()) {
      event.preventDefault();
    }
  }

  pressedSpaceKey = (event: KeyboardEvent) => event.key === " ";
  pressedEnterKey = (event: KeyboardEvent) => event.key === "Enter";
  didNotPressShiftKey = (event: KeyboardEvent) => !event.shiftKey;
  inputTextIsEmpty = () => this.inputText.trim() === "";
  clearInputText = () => this.inputText = "";

  doSendMessage(): void {
    this.sendMessage.emit({
      sender: this.sender,
      recipient: this.recipient,
      date: new Date(),
      text: this.inputText
    });
    this.inputText = "";
  }
}
