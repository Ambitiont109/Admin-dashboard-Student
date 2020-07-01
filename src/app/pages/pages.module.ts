import { NgModule } from '@angular/core';
import { NbMenuModule, 
  NbStepperModule, 
  NbCardModule, 
  NbInputModule,
  NbSelectModule,
  NbButtonModule,  
  NbTooltipModule,
  NbIconModule} from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ListModule } from './list/list.module';
import { AddComponent } from "./add/add.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ListModule,
    ReactiveFormsModule,
    FormsModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbTooltipModule,
    NbIconModule,    
  ],
  declarations: [
    PagesComponent,
    AddComponent,
  ],
})
export class PagesModule {
}
