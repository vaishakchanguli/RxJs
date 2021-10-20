import './style.css';

import { of, map, Observable } from 'rxjs';

let observable = new Observable((subsciber) => {
  subsciber.next('vaishak');
  subsciber.next('chan');
});
console.log(observable);
const subscription$ = observable.subscribe((value) => console.log(value));
const subscription2$ = observable.subscribe((value) => console.log(value));
console.log(subscription$);
console.log('subscription2',subscription2$);
subscription$.unsubscribe();
console.log(subscription$);
