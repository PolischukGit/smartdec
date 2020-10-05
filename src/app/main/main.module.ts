import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { MatIconModule } from '@angular/material/icon';
import { AccountComponent } from './components/account/account.component';
import { FuturesComponent } from './components/futures/futures.component';
import { SpotComponent } from './components/spot/spot.component';
import { CommunityComponent } from './components/community/community.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { HelpComponent } from './components/help/help.component';


@NgModule({
  declarations: [MainComponent, AccountComponent, FuturesComponent, SpotComponent, CommunityComponent, TournamentsComponent, HelpComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedComponentsModule,
    MatIconModule
  ]
})
export class MainModule { }
