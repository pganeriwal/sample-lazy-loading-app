import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'feature-one', loadChildren: () => import('./features/feature-one/feature-one.module').then(m => m.FeatureOneModule) },
  // { path: '', redirectTo: '/feature-one', pathMatch: 'full' }, // Redirect to the module on root
  // { path: '**', redirectTo: '/feature-one' }, // Wildcard route to handle undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
