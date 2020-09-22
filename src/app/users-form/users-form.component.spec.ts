import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { UsersFormComponent } from './users-form.component';

describe('UsersFormComponent', () => {
  let component: UsersFormComponent;
  let fixture: ComponentFixture<UsersFormComponent>;
  let user1Input: HTMLElement;
  let user2Input: HTMLElement;
  let button: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ UsersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersFormComponent);
    component = fixture.componentInstance;

    user1Input = getHTMLElement('#user1');
    user2Input = getHTMLElement('#user2');
    button = getHTMLElement('button');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    expect(user1Input).toBeTruthy();
    expect(user2Input).toBeTruthy();
    expect(button).toBeTruthy();
  });


  const getHTMLElement = (selector: string) => {
    return fixture.nativeElement.querySelector(selector);
  }

});
