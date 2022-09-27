import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { hotelReducer } from './core/store/reducer/hotel.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    // StoreModule.forRoot({ Hotel: hotelReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
