import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div style="display: flex; justify-content: center; padding: 20px; margin: auto">
      <button class="digitex-btn primary" (click)="toMain()">LOGIN</button>
    </div>
  `,
  styles: []
})
export class LoginComponent {

  constructor(private router: Router) {}

  toMain(): void {
    this.router.navigateByUrl('/main');
  }

}
