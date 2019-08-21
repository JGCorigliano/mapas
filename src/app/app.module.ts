import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MapaComponent } from './component/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  entryComponents: [
  MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBYgki8ikM214rMJKvTiYaM9Zz1ZE7mTP0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
