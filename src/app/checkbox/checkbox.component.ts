import { Component, OnInit } from '@angular/core';

import { BaseInput } from '../base-input';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent extends BaseInput<boolean> implements OnInit {
  ngOnInit() {
    this.value = this.value ? true : false;
  }
}
