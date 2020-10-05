import { Component } from '@angular/core';
import { FakeService } from '../../../services/fake-service.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  headerTabs: string[] = [
    'Dashboard',
    'Wallet',
    'Refer a Friend',
    'DGTX Treasure',
    'Trade History',
    'Battles',
    'Battle History',
    'API',
    'Security',
    'Insurance Fund',
    'Settings'
  ];

  checker$ = new BehaviorSubject<boolean>(false);

  constructor(private service: FakeService) {
  }

  checkValue(value: number): void {
    this.checker$.next(this.service.checkCode(value));
  }

}
