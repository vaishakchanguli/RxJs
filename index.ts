import { Observable } from 'rxjs';

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

observable$.subscribe(observer);

// subscription1.unsubscribe();

//takeUntil
//let unsusbsciption$ = new Subject<void>();
//const unsusbsciption$ = of([1, 2, 3, 4]);

//observable$.pipe(takeUntil(unsusbsciption$)).subscribe(observer);

//unsusbsciption$.next();
//unsusbsciption$.complete();
