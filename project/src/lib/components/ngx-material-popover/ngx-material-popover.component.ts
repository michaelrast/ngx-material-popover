import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MenuPositionX, MenuPositionY } from '@angular/material/menu';
import { NgxMatMenuTriggerDirective } from '../../directives/ngx-mat-menu-trigger.directive';

@Component({
  selector: 'ngx-material-popover',
  templateUrl: './ngx-material-popover.component.html',
  styleUrls: ['./ngx-material-popover.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'ngxMaterialPopover'
})
export class NgxMaterialPopoverComponent implements OnInit {
  
  @Input() clickOutToClose: boolean = false;
  @Input() xPosition: MenuPositionX = 'after';
  @Input() yPosition: MenuPositionY = 'below';
  @Input() popoverContent!: TemplateRef<unknown>;
  @Input() mode: 'toggle' | 'hover' = 'toggle';

  @ViewChild(NgxMatMenuTriggerDirective, { static: true })
  private readonly ngxMatMenuTrigger!: NgxMatMenuTriggerDirective;

  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit(): void {
    if (this.mode === 'toggle') {
      this.elementRef.nativeElement.addEventListener('click', () => this.ngxMatMenuTrigger.toggleMenu());
    } else {
      this.elementRef.nativeElement.addEventListener('mouseenter', () => this.ngxMatMenuTrigger.openMenu());
      this.elementRef.nativeElement.addEventListener('mouseleave', () => this.ngxMatMenuTrigger.closeMenu());
    }
  }

  open(): void {
    this.ngxMatMenuTrigger.openMenu();
  }

  close(): void {
    this.ngxMatMenuTrigger.closeMenu();
  }
}
