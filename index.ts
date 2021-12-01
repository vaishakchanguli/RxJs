import { from, of, concat, interval, merge } from 'rxjs';
import { take, tap, delay, concatMap } from 'rxjs/operators';

let interval$ = interval(1000).pipe(take(5));
let timer$ = of('hello').pipe(
  tap((value) => console.log('tap', value)),
  take(1)
);

merge(timer$, interval$).subscribe({
  next: (value) => {
    console.log(value);
  },
  complete: () => console.log('completed'),
});
