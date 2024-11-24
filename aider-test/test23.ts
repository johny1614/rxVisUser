import { map, Subject } from "rxjs";

export class Test1 {

    x$: Subject<number> = new Subject();
    y$: Subject<number> = new Subject();

    constructor() {
        console.log('Test1');
    }

    observeX() {
        this.x$.subscribe((x) => {
            console.log('x', x);
        });
    }

    observeY() {
        this.y$.pipe(
            map(y => y * 2),
        ).subscribe((y) => {
            console.log('jest i y', y);
        });
    }
}
