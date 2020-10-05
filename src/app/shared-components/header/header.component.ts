import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MAIN_ROUTING_ITEMS } from '../../main/main-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Input('active') active: string;
  @Output('switchTab') switchTab = new EventEmitter<string>();

  headerTabs: string[] = MAIN_ROUTING_ITEMS;

}
