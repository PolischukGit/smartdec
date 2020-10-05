import { Component } from '@angular/core';

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

}
