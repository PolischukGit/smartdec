import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { AccountComponent } from './components/account/account.component';
import { FuturesComponent } from './components/futures/futures.component';
import { SpotComponent } from './components/spot/spot.component';
import { CommunityComponent } from './components/community/community.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { HelpComponent } from './components/help/help.component';

export const MAIN_ROUTING_ITEMS = [
  'Futures',
  'Spot',
  'Community',
  'Tournaments',
  'Account',
  'Help'
];

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'futures', component: FuturesComponent },
      { path: 'spot', component: SpotComponent },
      { path: 'community', component: CommunityComponent },
      { path: 'tournaments', component: TournamentsComponent },
      { path: 'account', component: AccountComponent },
      { path: 'help', component: HelpComponent },
      { path: '', redirectTo: 'account', pathMatch: 'full' },
      { path: '**', redirectTo: 'account', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
