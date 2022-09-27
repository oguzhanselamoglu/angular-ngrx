import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { hotelReducer } from '../core/store/reducer/hotel.reducer';
const routes: Routes = [{ path: "list", component: HotelListComponent }];

@NgModule({
  declarations: [
    HotelListComponent,
    HotelEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot({ 'app': hotelReducer }),
  ],
  exports: [RouterModule]
})
export class HotelModule { }
