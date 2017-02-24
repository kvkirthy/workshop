import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { DinosaurDetailsComponent } from './dinosaur-details/dinosaur-details.component';
import { DinosaurListComponent } from './dinosaur-list/dinosaur-list.component';

import { DataAccessService } from './services/data-access.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DinosaurDetailsComponent,
    DinosaurListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataAccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
