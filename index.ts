import './style.css';

import { of, map, Observable } from 'rxjs';

let observable = new Observable((subsciber) => {
  let counter = 1;
  console.log('start');

  let intervalId = setInterval(() => {
    console.log('emit', counter);
    subsciber.next(counter++);
  }, 5000);

  return () => {
    console.log('Teardown');
    clearInterval(intervalId);
  };
});

let subscription = observable.subscribe({
  next: (value) => console.log(value),
});

subscription.unsubscribe();
