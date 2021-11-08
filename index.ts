import { zip, of, from, Observable, combineLatest } from 'rxjs';
import { take } from 'rxjs';

let age$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  return () => {
    console.log('age$ teardown');
  };
});
let name$ = new Observable((subscriber) => {
  subscriber.next('Foo');
  subscriber.complete();
  subscriber.next('Bar');
  subscriber.next('beer');
  return () => {
    console.log('name$ teardown');
  };
});

let combine$ = combineLatest([age$, name$])
  .pipe(take(2))
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Complete'),
  });

setTimeout(() => {
  combine$.unsubscribe();
}, 2000);
