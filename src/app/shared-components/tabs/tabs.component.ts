import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit, OnDestroy {

  @HostBinding('style.display') display = 'flex';
  @HostBinding('style.height') height = '100%';
  @HostBinding('style.width') width = '100%';

  @Input('tabs') tabs: string[];
  @Input('active') active: string;
  @Input('collapse') collapse = 1000;
  @Output('switchTab') switchTab = new EventEmitter<string>();

  screenWatcher$: BehaviorSubject<number>;
  private alive$ = new Subject<void>();

  ngOnInit(): void {
    this.screenWatcher$ = new BehaviorSubject<number>(null);
    fromEvent(window, 'resize').pipe(
      takeUntil(this.alive$),
      startWith(true)
    ).subscribe(() => {
      const {innerWidth} = window;
      this.screenWatcher$.next(innerWidth);
    });
  }

  ngOnDestroy(): void {
    this.alive$.next();
    this.alive$.complete();
  }
}
