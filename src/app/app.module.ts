import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, route_col } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/sections/navigation/navigation.component';
import { ContainerSlideComponent } from './components/sections/container-slide/container-slide.component';
import { ContainerPlainComponent } from './components/sections/container-plain/container-plain.component';
import { ContainerFormComponent } from './components/sections/container-form/container-form.component';
import { ContactFormComponent } from './components/sections/contact-form/contact-form.component';
import { FooterComponent } from './components/sections/footer/footer.component';
import { ContainerTopicComponent } from './components/sections/container-topic/container-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    route_col,
    ContainerSlideComponent,
    ContainerPlainComponent,
    ContainerFormComponent,
    ContactFormComponent,
    FooterComponent,
    ContainerTopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
