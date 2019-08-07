import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'main', component: MainComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'enabled',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
