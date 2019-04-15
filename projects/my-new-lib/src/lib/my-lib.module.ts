import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [CounterButtonComponent, SideBarComponent],
  exports: [CounterButtonComponent, SideBarComponent]
})
export class MyLibModule {}
