import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoComponent implements OnInit, OnDestroy {

  @Input('collapse') collapse = 1100;
  @Output('switchTab') switchTab = new EventEmitter<string>();

  balance = 20000;

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
