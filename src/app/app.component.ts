import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {extensionReadyForMessages$, greet, initRxVision} from "rx-vis-lib-new";
import {addRxVisionEmission} from "rx-vis-lib-new/src";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxUser';

  constructor() {
    initRxVision(['stream1', 'stream2']);
    setTimeout(() => {
      addRxVisionEmission('stream1', 'value1');
      extensionReadyForMessages$.next(true);
    },4000)
  }

  makeGreet(){
    return greet('World xdd');
  }
}
