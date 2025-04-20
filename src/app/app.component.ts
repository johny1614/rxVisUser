import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {addRxVisionEmission, initRxVision} from "rx-vis-lib-new";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxUserr';

  randomNumber = Math.floor(Math.random() * 100);

  constructor() {

    initRxVision(['stream1', 'stream2'],window);

    setTimeout(() => {
      initRxVision(['stream1', 'stream2'], window);
    }, 1000);

    setTimeout(() => {
      addRxVisionEmission('stream1', this.randomNumber);
    }, 2000)

    setTimeout(() => {
      addRxVisionEmission('stream1', 'value2');
    }, 3000)

    setTimeout(() => {
      addRxVisionEmission('stream2', 'xd');
    }, 4000)

  }
}
