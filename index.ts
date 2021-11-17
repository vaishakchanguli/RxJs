import { Observable, of, tap } from 'rxjs';
import { concatMap } from 'rxjs/operators';

const source$ = new Observable((subsciber) => {
  setTimeout(() => subsciber.next('A'), 2000);
  setTimeout(() => subsciber.next('B'), 5000);
});

console.log('Subscribed');
source$
.pipe(concatMap((value) => of(1, 2))) //will concat outer to inner obs.
.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});
