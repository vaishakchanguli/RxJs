import { from, of, concat, interval } from 'rxjs';
import { take } from 'rxjs/operators';

let interval$ = interval(1000).pipe(take(5));
let timer$ = of(
  setTimeout(() => {
    return 'hello';
  }, 2000)
);

concat(timer$, interval$).subscribe((value) => {
  console.log(value);
});
