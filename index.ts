import { of, from } from "rxjs";
import { map, tap, take, filter, concat, catchError } from "rxjs/operators";

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
//RxJS Operator: FILTER;
of(1, 2, 3, 4, 5)
  .pipe(filter(item => item % 2 === 0))
  .subscribe(console.log);

  //result: 2,4
*/


 /*
//RxJS Operator: CONCAT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!;
let  argument1 = of(1, 2, 3);
let  argument2 = of(4, 5, 6);
let  argument3 = of(7, 8, 9);

let  result = argument1.pipe(concat(argument2));
result = result.pipe(concat(argument3));

result.subscribe(console.log)

//of(result).subscribe(console.log);

*/

let  argument1 = of(1, 2, 3);
let  argument2 = of(4, 5, 6);
let  argument3 = of(7, 8, 9);
let  result = argument1.pipe(concat(argument2.pipe(concat(argument3))));
result.subscribe(console.log)

/*
//RxJS Operator: CATCHERROR;
of(8, 6, 4, 2)
  .pipe(
    map(item => {
      if (item === 2){
        throw "";
      }
      return item / (item - 2);
    }),
    catchError(err => of("Bölünme Hatası"))
  )
  .subscribe(console.log);

  //result: 1.3333333333333333, 1.5, 2, Bölünme Hatası;

  */