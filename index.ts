import { EMPTY, interval, of, throwError } from 'rxjs';
import { catchError, concatMap, take } from 'rxjs/operators';

interval(1000)
  .pipe(
    concatMap((value) => {
      if (value % 3) return of(value);
      else return throwError(() => 'Error').pipe(catchError(() => EMPTY));
    }),
    take(5)
  )
  .subscribe({
    next: (value) => console.log(value),
    error: (error) => console.log(error),
    complete: () => console.log('Completed'),
  });
