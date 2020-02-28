import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Lib1Module } from '@nx-affected-test/lib1';
import { Lib2Module } from '@nx-affected-test/lib2';
import { Lib3Module } from '@nx-affected-test/lib3';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Lib1Module, Lib2Module, Lib3Module],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
