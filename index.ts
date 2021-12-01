import { from, of, concat, interval, merge, timer } from 'rxjs';
import { take, tap, delay, concatMap } from 'rxjs/operators';

let interval$ = interval(1000).pipe(take(5));
let timer$ = of('hello').pipe(tap((value) => console.log('tap', value)));

// merge(timer$, interval$).subscribe({
//   next: (value) => {
//     console.log(value);
//   },
//   complete: () => console.log('completed'),
// });

merge(timer$, interval$).subscribe({
  next: (value) => {
    console.log(value);
    timer(1).subscribe(() => {});
  },
  error: () => {},
  complete: () => {
    console.log('complete');
  },
});
