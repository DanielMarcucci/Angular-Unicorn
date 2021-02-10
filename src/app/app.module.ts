import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UnicornFormComponent } from './components/unicorn-form/unicorn-form.component';
import { UnicornListComponent } from './components/unicorn-list/unicorn-list.component';

import { UnicornService } from './services/unicorn.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UnicornFormComponent,
    UnicornListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UnicornService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
