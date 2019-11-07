import { of, from } from "rxjs";
import { map, tap, take, filter } from "rxjs/operators";

/*
//RxJS Operator: MAP;

of(2, 4, 6).pipe(
  map(item => item * 2)
).subscribe(console.log);

  result:4,8,12 
*/

/*
//RxJS Operator: TAP;
of(2, 4, 6)
  .pipe(
    tap(item => console.log(item)),
    map(item => item * 2),
    tap(item => console.log(item)),
    map(item => item - 3),
    tap(item => console.log(item))
  )
  .subscribe();

  //result: 2,4,1,4,8,5,6,12,9
  */

/*
//RxJS Operator: TAKE;
of(2, 4, 6)
  .pipe(
    tap(item => console.log(item)),
    map(item => item * 2),
    take(2),
    map(item => item - 3),
    tap(item => console.log(item))
  )
  .subscribe();

  //result: 2,1,4,5
*/

/*
//RxJS Operator: TAKE;
of(1, 2, 3, 4, 5)
  .pipe(filter(item => item % 2 === 0))
  .subscribe(console.log);

  //result: 2,4
*/