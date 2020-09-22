import { Component, EventEmitter, Output } from '@angular/core';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent {

  @Output()
  enterChat = new EventEmitter<Users>();

  model: Users = { user1: "", user2: ""};

  onSubmit() {
    this.enterChat.emit(this.model);
  }

}
