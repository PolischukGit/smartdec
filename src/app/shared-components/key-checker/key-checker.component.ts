import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { fromEvent, Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-key-checker',
  templateUrl: './key-checker.component.html',
  styleUrls: ['./key-checker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyCheckerComponent implements OnInit, OnDestroy {

  @Input('rows') rows = 5;
  @Output('sendValue') sendValue = new EventEmitter<number>();

  formGroup: FormGroup;
  activeInputIndex: number;
  private alive$ = new Subject<void>();

  get inputs(): number[] {
    return Array(this.rows).map((val, ind) => ind);
  }

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({});
    for (let i = 0; i < this.rows; i++) {
      const formContr = new FormControl();
      this.formGroup.addControl(i.toString(), formContr);
    }
    fromEvent(window, 'keydown').pipe(
      takeUntil(this.alive$),
      filter((e: KeyboardEvent) => {
        return e.keyCode === 8 || Number.isInteger(+(e.target as HTMLInputElement).value);
      }),
      tap(e => e.preventDefault())
    ).subscribe((e: KeyboardEvent) => {
      if (this.activeInputIndex !== null) {
        const control = this.formGroup.get(this.activeInputIndex.toString());
        const value = control.value;
        if (e.keyCode === 8) {
          if (!this.activeInputIndex) {
            control.setValue(null);
          } else if (this.activeInputIndex === this.rows - 1 && value) {
            control.setValue(null);
          } else {
            this.handleFocus(true);
            this.formGroup.get((this.activeInputIndex).toString()).setValue(null);
          }
        } else if (Number.isInteger(+e.key)) {
          if (!control.value) control.setValue(+e.key);
          this.handleFocus();
        }
        const curr = Object.entries(this.formGroup.value).map(([, v]) => v).join('');
        this.sendValue.emit(+curr);
      }
    });
  }

  handleFocus(back = false): void {
    const activeIndex = Object.entries(this.formGroup.value).map(([, value]) => value).join('').length;
    let curr;
    if (activeIndex === this.rows && !back) {
      curr = this.rows - 1;
    } else {
      curr = back ? activeIndex - 1 : activeIndex;
    }
    this.focusInput(curr);
    this.activeInputIndex = curr;
    const control = this.formGroup.get(this.activeInputIndex.toString());
    control.setValue(control.value);
  }

  focusInput(ind: number): void {
    const inputs = this.el.nativeElement.querySelectorAll('input');
    (inputs[ind] as HTMLInputElement).focus();
  }

  ngOnDestroy(): void {
    this.alive$.next();
    this.alive$.complete();
  }

}
