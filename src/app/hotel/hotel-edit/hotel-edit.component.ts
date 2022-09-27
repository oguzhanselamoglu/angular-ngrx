import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addHotel } from 'src/app/core/store/actions/hotel.action';
import { Hoteldto } from '../models/hotelDto';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.scss']
})
export class HotelEditComponent implements OnInit {
  data: Hoteldto = new Hoteldto();
  name: Observable<string>;
  constructor( public dialogRef: MatDialogRef<HotelEditComponent>,private store: Store<Hoteldto>) {
    this.name = this.store.select("name");
  }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void{
    this.store.dispatch(addHotel(this.data));
    this.dialogRef.close({
      status: true,
      data:this.data
  });
  }
}
