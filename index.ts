import './style.css';

import { of, map, Observable } from 'rxjs';

let observable = new Observable((subsciber) => {
  let counter = 1;
  console.log('start');

  setInterval(() => {
    console.log('emit', counter);
    subsciber.next(counter++);
  }, 10000);

  subsciber.complete();
});

let subscription = observable.subscribe({
  next: (value) => console.log(value),
});
