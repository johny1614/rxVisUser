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

    initRxVision(['stream1', 'stream2',
      'stream3',
      'stream4',
      'stream5',
      'stream6',
      'stream7',

      'stream8',
      'stream9',
      'stream10',
    ],window);
    addRxVisionEmission('stream1', this.randomNumber);
    addRxVisionEmission('stream2', 'value2');
    addRxVisionEmission('stream3', 'xd');
    addRxVisionEmission('stream4', 'xd');
    addRxVisionEmission('stream5', 'xd');
    addRxVisionEmission('stream6', 'xd');
    addRxVisionEmission('stream7', 'xd');
    addRxVisionEmission('stream8', 'xd');
    addRxVisionEmission('stream9', 'xd');
    addRxVisionEmission('stream10', 'xd');


    // setTimeout(() => {
    //   initRxVision(['stream1', 'stream2'], window);
    // }, 1000);
    //
    // setTimeout(() => {
    //   addRxVisionEmission('stream1', this.randomNumber);
    // }, 2000)
    //
    // setTimeout(() => {
    //   addRxVisionEmission('stream1', 'value2');
    // }, 3000)
    //
    // setTimeout(() => {
    //   addRxVisionEmission('stream2', 'xd');
    // }, 4000)

  }
}
