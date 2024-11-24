import { map, Subject, tap } from "rxjs";
import { addRxVisionEmission } from "rx-vis-lib-new";

export class Test1 {

    x$: Subject<number> = new Subject();
    y$: Subject<number> = new Subject();

    constructor() {
        console.log('Test1');
    }

    observeX() {
        this.x$.pipe(
            tap(() => addRxVisionEmission('Test1.observeX', 1)),
        ).subscribe((x) => {
            console.log('x', x);
        });
    }

    observeY() {
        this.y$.pipe(
            tap(() => addRxVisionEmission('Test1.observeY', 1)),
            map(y => y * 2),
        ).subscribe((y) => {
            console.log('jest i y', y);
        });
    }
}
