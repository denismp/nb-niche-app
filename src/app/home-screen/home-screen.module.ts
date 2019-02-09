import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { HomeScreenComponent } from './home-screen.component';

@NgModule({
  declarations: [HomeScreenComponent],
  imports: [
    CommonModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule
  ],
  providers: [NbSidebarService], // we need this service for the sidebar
})
export class HomeScreenModule { }
