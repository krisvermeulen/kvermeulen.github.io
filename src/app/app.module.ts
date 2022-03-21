import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {ScanComponent} from './scan.component';
import {GeoComponent} from './geo.component';
import {MapService} from './map.service';
import {MapComponent} from './map.component';

@NgModule({
  declarations: [
    AppComponent,
    GeoComponent,
    MapComponent,
    ScanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    ZXingScannerModule
  ],
  providers: [
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
