import { Observable } from 'rxjs';
import { map, tap } from 'rxjs';

import { interval } from 'rxjs';
import { debounce } from 'rxjs/operators';

interval(1000)
  .pipe(debounce((i) => interval(200 * i)))
  .subscribe((value) => console.log('Next', value));
