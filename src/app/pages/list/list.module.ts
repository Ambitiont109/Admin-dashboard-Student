import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbIconModule, NbButtonModule, NbInputModule, NbListModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from '../detail/detail.component';


@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    FormsModule,
    NbListModule,
  ]
})
export class ListModule { }
