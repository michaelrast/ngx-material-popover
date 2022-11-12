import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { NgxMaterialPopoverComponent } from './components/ngx-material-popover/ngx-material-popover.component';
import { NgxMatMenuTriggerDirective } from './directives/ngx-mat-menu-trigger.directive';

@NgModule({
  imports: [CommonModule, MatMenuModule],
  declarations: [NgxMatMenuTriggerDirective, NgxMaterialPopoverComponent],
  exports: [NgxMaterialPopoverComponent]
})
export class NgxMaterialPopoverModule {}
