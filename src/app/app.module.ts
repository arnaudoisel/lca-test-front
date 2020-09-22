import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SimplebarAngularModule } from 'simplebar-angular';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { MustBeDifferentDirective } from './directives/must-be-different.directive';
import { NotBlankDirective } from './directives/not-blank.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    UsersFormComponent,
    MustBeDifferentDirective,
    NotBlankDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SimplebarAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
