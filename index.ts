import './style.css';

import { of, map, Observable } from 'rxjs';

let observable = new Observable((subsciber) => {
  subsciber.next('vaishak');
  subsciber.next('chan');
});
console.log(observable);
