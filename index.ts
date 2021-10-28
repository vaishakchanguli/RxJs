import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

interval(2000)
  .pipe(take(5))
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Complete'),
  });

// Logs:
// 0
// Completed
