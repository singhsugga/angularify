import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolTipDirective } from './tooltip.directive';



@NgModule({
  declarations: [
    ToolTipDirective
  ],
  imports: [
    CommonModule
  ],exports:[ToolTipDirective]
})
export class GuiToolTipModule { }
