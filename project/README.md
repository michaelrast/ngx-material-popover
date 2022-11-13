# ngx-material-popover

Popover for Angular Material

Uses the material menu to work like a popover

## Dependencies

- @angular/material
- @angular/cdk


# Installation

```shell
npm install --save ngx-material-popover
```

# Usage

```TypeScript
//app.module.ts
import { NgxMaterialPopoverModule } from 'ngx-material-popover';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        NgxMaterialPopoverModule,
        BrowserAnimationsModule
        ]
    })
```
For animations please import the ```BrowserAnimationsModule```.

```Html
<ngx-material-popover 
  [popoverContent]="popoverContent" 
  [clickOutToClose]="true" 
  [xPosition]="xPosition"
  [yPosition]="yPosition"
  [clickOutToClose]="true"
  (onClose)="popoverClosed($event)"
  #popover="ngxMaterialPopover" mode="toggle">
  <button mat-raised-button data-cy="button">Popover Example</button>
</ngx-material-popover>

<ng-template #popoverContent>
  <p>Popover content</p>
  <div class="footer">
    <button mat-button (click)="onClose()">close</button>
    <button mat-raised-button color="accent" (click)="onConfirm()" data-cy="button-close-popover">OK</button>
  </div>
</ng-template>
```