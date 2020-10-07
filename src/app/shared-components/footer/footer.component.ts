import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EventHandler } from '../../helpers/event-handler';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent extends EventHandler {

  @Input('collapse') collapse = 1000;

  get copyright(): string {
    return `© 2017 - ${new Date().getFullYear()}`;
  }

}
