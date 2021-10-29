import { zip, of, from } from 'rxjs';

let age$ = of(27, 25);
let name$ = from(['Foo', 'Bar', 'Beer']);
let isDev$ = of(true, true, false, false);

zip([age$, name$, isDev$]).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Complete'),
});
