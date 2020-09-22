import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  users: Users;

  enterChat(users: Users) {
    this.users = users;
  }
}
