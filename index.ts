import { of, from } from "rxjs";
import { map, tap, take } from "rxjs/operators";

/*
of(2, 4, 6).pipe(
  map(item => item * 2)
).subscribe(console.log);

  result:4,8,12 
*/

/*
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