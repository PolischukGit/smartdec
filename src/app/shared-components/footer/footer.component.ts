import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit, OnDestroy {

  @Input('collapse') collapse = 1000;

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
