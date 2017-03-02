import { ChangeDetectionStrategy, Component, Input, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operator/filter';

import { BaseInput } from '../base-input';



@Component({
  selector: 'app-draw-input',
  templateUrl: './draw-input.component.html',
  styleUrls: ['./draw-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawInputComponent extends BaseInput<PixelPosition[]> implements OnInit {
  drawing = false;
  valid: Observable<boolean>;
  @Input() numPixelsAcross = 10;

  ngOnInit() {
    if (!this.value) this.value = this.makeEmptyPixels();
    // Valid when there's more than 55. Cheating to make it valid when heart is present.
    this.valid = filter.call(this.change, pixels => {
      return pixels.filter(pixel => pixel.filled).length > 55;
    })
    this.change.subscribe((pixels) => {
      console.log(pixels.filter(pixel => pixel.filled).length)

    })
  }

  fillPixel(evt: Event) {
    if (!this.drawing) return;
    let children = (evt.target as HTMLElement).parentElement.children;
    let index = Array.prototype.indexOf.call(children, evt.target);
    // Ignore if out of bounds, or if pixel already filled
    if (index >= 0 && !this.value[index].filled) {
      let newValue = [...this.value];
      newValue[index].filled = true;
      this.value = newValue;
    }
  }

  startDrawing() {
    this.drawing = true;
  }

  @HostListener('window:mouseup')
  stopDrawing() {
    this.drawing = false;
  }

  clear() {
    this.value = this.makeEmptyPixels();
  }

  makeEmptyPixels(): PixelPosition[] {
    let pixels = [];
    for (let x=0; x<this.numPixelsAcross; x++) {
      for (let y=0; y<this.numPixelsAcross; y++) {
        pixels.push({x, y});
      }
    }
    return pixels;
  }
}

export interface PixelPosition {
  x: number;
  y: number;
  filled?: boolean;
}
