import { NgModule } from '@angular/core';
import { NbCardModule, NbTooltipModule, NbButtonModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { EchartsPieComponent } from "./echarts/pie.component";
import { EchartsBarComponent } from "./echarts/bar.component";
@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NgxEchartsModule,

  ],
  declarations: [
    DashboardComponent,
    EchartsPieComponent,
    EchartsBarComponent
  ],
})
export class DashboardModule { }
