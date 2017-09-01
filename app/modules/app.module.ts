import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from './shared';
import { FirebaseService } from "./services/firebase.service";


@NgModule({
  providers: [
    FirebaseService
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    HomeModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
