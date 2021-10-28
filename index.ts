import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

const obs$ = new Observable((subsciber) => {
  subsciber.next('Hello');
  subsciber.next('vaishak');
  subsciber.next('chan');
  subsciber.complete();
});

const observer = {
  next: (value) => console.log(`next:${value}`), //required
  error: (err) => console.log(console.log('error')), //optional
  complete: () => console.log('complete'), //optional
};

const observable$ = new Observable((subsciber) => {
  let counter = 1;
  console.log('start');

  const intervalId = setInterval(() => {
    //interval to emit async value endlessly
    console.log('emit', counter);
    subsciber.next(counter++);
    if (counter > 3) {
      //cancel subscription
      subsciber.complete();
    }
  }, 2000);

  return () => {
    console.log('Teardown');
    clearInterval(intervalId);
  };
});

let alive = true;

observable$.pipe(takeWhile(() => alive)).subscribe(observer);

setTimeout(() => (alive = false));
