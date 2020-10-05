import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { EventHandler } from '../../helpers/event-handler';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent extends EventHandler {

  @HostBinding('style.display') display = 'flex';
  @HostBinding('style.height') height = '100%';
  @HostBinding('style.width') width = '100%';

  @Input('tabs') tabs: string[];
  @Input('active') active: string;
  @Input('collapse') collapse = 1000;
  @Output('switchTab') switchTab = new EventEmitter<string>();

}
