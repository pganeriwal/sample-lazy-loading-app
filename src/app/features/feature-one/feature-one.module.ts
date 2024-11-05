import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureOneRoutingModule } from './feature-one-routing.module';
import { FeatureOneComponent } from './feature-one.component';
import { ExtraModule } from './extra/extra.module';


@NgModule({
  declarations: [
    FeatureOneComponent
  ],
  imports: [
    CommonModule,
    FeatureOneRoutingModule,
    ExtraModule
  ]
})
export class FeatureOneModule { }
