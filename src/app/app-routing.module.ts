import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './pages/chart/chart.component';
import { SimulationViewComponent } from './pages/simulation-view/simulation-view.component';

const routes: Routes = [
  {path: 'chart', component:ChartComponent},
  {path: '', component:SimulationViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
