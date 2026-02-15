import {Component, output} from '@angular/core';

@Component({
  selector: 'app-child',
  styles: `
    .btn {
      padding: 5px;
    }
  `,
  template: `<button (click)="addItem()">Add Item</button>`,
})
export class Child {
  addItem() {
    this.addItemEvent.emit('🐢');
  }
  addItemEvent = output<string>();
}
