import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { EventHandler } from '../../helpers/event-handler';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoComponent extends EventHandler {

  @Input('collapse') collapse = 1100;
  @Output('switchTab') switchTab = new EventEmitter<string>();

  balance = 20000;

}
