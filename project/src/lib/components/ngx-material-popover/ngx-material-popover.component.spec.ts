import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { NgxMatMenuTriggerDirective } from '../../directives/ngx-mat-menu-trigger.directive';
import { NgxMaterialPopoverComponent } from './ngx-material-popover.component';

describe('NgxMaterialPopoverComponent', () => {
  let component: NgxMaterialPopoverComponent;
  let fixture: ComponentFixture<NgxMaterialPopoverComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule],
      declarations: [NgxMaterialPopoverComponent, NgxMatMenuTriggerDirective]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
