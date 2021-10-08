import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username: string;

  constructor() { }

  get disabledButton(): boolean {
    return !this.username || !this.username.length;
  }

  public clearUsername() {
    this.username = '';
  }
}
