import { NgModule } from '@angular/core';
import { CounterControlsComponent } from './components/counter-controls/counter-controls.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CounterControlsComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [CounterControlsComponent, FooterComponent, HeaderComponent],
})
export class SharedModule {}
