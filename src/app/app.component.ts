import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {greet} from "rx-vis-lib-new";

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
  }

  makeGreet(){
    return greet('World xdd');
  }
}
