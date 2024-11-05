import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraComponent } from './extra.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ExtraComponent },
];

@NgModule({
  declarations: [ExtraComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ExtraModule {}
