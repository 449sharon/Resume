import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ResumeComponent } from './resume/resume.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import {RouterModule, Routes}from'@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    ContactMeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', component: ResumeComponent},
    {path:'contact-me',component: ContactMeComponent},
    {path:'resume' , component:ResumeComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
