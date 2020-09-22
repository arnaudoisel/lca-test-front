import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { MustBeDifferentDirective } from './directives/must-be-different.directive';
import { NotBlankDirective } from './directives/not-blank.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsersFormComponent,
    MustBeDifferentDirective,
    NotBlankDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
