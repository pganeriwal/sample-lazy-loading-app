import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FeatureOneComponent } from './feature-one.component';

const routes: Routes = [
  { path: '', component: FeatureOneComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureOneRoutingModule {
  constructor(private router: Router) {
    this.router.config.push({
      path: 'feature-one/extra',
      loadChildren: () => {
        console.log('Loading Extra Module...');
        return import('./extra/extra.module').then(m => m.ExtraModule);
      },
    });
  }
}
