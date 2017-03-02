import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nrwl Forms';

  inputsChanged(val) {
    console.log('app: input changed', val);
  }
}
