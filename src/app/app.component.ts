import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Message } from 'src/app/models/message';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  // App is not complex enough to justify the use of NgRx/Redux
  users: Users;
  chatHistory: Message[] = [];

  sendMessage(message: Message): void {
    this.chatHistory = [...this.chatHistory, message];
  }

  enterChat(users: Users) {
    this.users = users;
  }
}
