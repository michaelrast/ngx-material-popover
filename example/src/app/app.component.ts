import { Component, ViewChild } from '@angular/core';
import { NgxMaterialPopoverComponent } from '../../../project/src/public-api';
import { MenuPositionX, MenuPositionY } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('popover', { static: true })
  readonly popover!: NgxMaterialPopoverComponent;

  xPosition: MenuPositionX = 'after';
  yPosition: MenuPositionY = 'below';

  isConfirm = false;

  onClose(): void {
    this.isConfirm = false;
    this.popover.close();
  }

  onConfirm(): void {
    this.isConfirm = true;
    this.popover.close();
  }

  openPopover(): void {
    this.popover.open();
  }

  popoverClosed(event: any) {
    console.log(event);
    alert('closed');
  }
}
