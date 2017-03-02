import { HostBinding, Input, Output } from '@angular/core';

import { Subject } from 'rxjs/Subject';

export class BaseInput<T> {
  @HostBinding('style.border') borderStyle = '1px solid #000';
  @HostBinding('style.padding') padding = '10px';
  @HostBinding('style.display') display = 'inline-block';
  @HostBinding('style.borderRadius') borderRadius = '5px';

  @Output() change: Subject<T> = new Subject();

  _value: T;

  @Input()
  set value(val: T) {
    this._value = val;
    this.change.next(this._value);
  }

  get value(): T {
    return this._value;
  }
}
