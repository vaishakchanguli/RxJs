import { Observable, Subject } from 'rxjs';
import { first, take, takeUntil, takeWhile } from 'rxjs/operators';

let aliveSubscription = true;
let observable$ = new Observable((subsciber) => {
  let counter = 1;
  console.log('start');

  // let intervalId = setInterval(() => {
  //   console.log('emit', counter);
  //   subsciber.next(counter++);
  // }, 5000);
  //subsciber.error('error');
  subsciber.next(1);
  subsciber.next(2);
  subsciber.next(3);

  return () => {
    console.log('Teardown');
    //clearInterval(intervalId);
  };
});

// let subscription = observable$ .subscribe({
//   next: (value) => console.log(value),
// });

const observer = {
  next: (value) => {
    console.log(value);
  }, //required
  error: (err) => {
    console.log(err);
  }, //optional
  complete: () => {
    console.log('complete');
  }, //optional
};

let subscription1 = observable$.subscribe(observer);
subscription1.unsubscribe();

//new obeservale to pass for 'takeUntil' operator
let unsusbsciption$ = new Subject<void>();

observable$.pipe(takeUntil(unsusbsciption$)).subscribe(observer);

//to end 'observable$' below steps must be executed.
//We cannot exclude any steps give below.
unsusbsciption$.next();
unsusbsciption$.complete();
