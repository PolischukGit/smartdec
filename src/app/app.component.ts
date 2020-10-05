import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styles: []
})
export class AppComponent {
  @HostBinding('style.minWidth') minWidth = '500px';
}
