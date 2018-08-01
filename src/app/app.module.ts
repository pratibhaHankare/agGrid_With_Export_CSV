
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importing the agGrid
import { AgGridModule} from 'ag-grid-angular/main';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import 'ag-grid-enterprise';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    // this array is used so that we can define out custome class for color or button colors
    AgGridModule.withComponents([]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
