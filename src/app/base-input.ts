import { Input } from '@angular/core';

export class BaseInput<T> {
  transformedInput: T;

  @Input()
  set value(val: any) {
    this.transformedInput = this.transformInput(val);
  }

  get value(): any {
    return this.transformedInput;
  }

  // No-op that can be overridden
  transformInput(val: any): T {
    return val;
  }
}