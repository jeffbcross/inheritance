import { Component } from '@angular/core';
import { BaseInput } from '../base-input';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent extends BaseInput<number> {
  increment() {
    this.value = this.value + 1;
  }

  decrement() {
    this.value = this.value - 1;
  }

  updateValue(evt: Event) {
    this.value = this.transformInput((evt.target as HTMLInputElement).value);
  }

  transformInput(val: string | number): number {
    if (typeof val === 'number') {
      return val;
    }
    else if (typeof val === 'string') {
      return parseFloat(val);
    } else {
      throw new Error('unknown input for number');
    }
  }
}
