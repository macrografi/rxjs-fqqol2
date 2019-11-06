import { of, from } from "rxjs";
import { map, tap, take } from "rxjs/operators";

of(2, 4, 6).pipe(
  map(item => item * 2)
).subscribe(console.log);

/*
  result:4,8,12 
*/