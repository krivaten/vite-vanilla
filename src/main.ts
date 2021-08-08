import "./style.css";

import { fromEvent } from "rxjs";
import { scan } from "rxjs/operators";
import * as R from "ramda";

const { identity } = R;
console.log(R.map(identity, [1, 2, 3]));

fromEvent(document.querySelector("button")!, "click")
  .pipe(scan((count) => ++count, 0))
  .subscribe((count) => console.log(`Clicked ${count} times`));
