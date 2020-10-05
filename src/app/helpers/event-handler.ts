import { fromEvent, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export class EventHandler {

  get screenWidthValue(): Observable<number> {
    return fromEvent(window, 'resize').pipe(
      map(() => window.innerWidth),
      startWith(window.innerWidth)
    );
  }

}
