import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { CheckpointCriteriaService } from './services/checkpoint-criteria.service';
import { CheckpointCriteriaStore } from './stores/chckpoint-criteria.store';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'niche2' }),
    NbLayoutModule,
    NbSidebarModule.forRoot()
  ],
  providers: [CheckpointCriteriaService, CheckpointCriteriaStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
