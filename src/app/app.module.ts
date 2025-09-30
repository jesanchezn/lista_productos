import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// FormsModule es necesario para usar [(ngModel)] en los formularios/templates
// Los componentes en esta app son standalone; no deben declararse en el NgModule

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: []
})
export class AppModule { }
