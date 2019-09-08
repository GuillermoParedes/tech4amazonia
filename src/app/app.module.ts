import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { AboutComponent } from './components/about/about.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { FaqComponent } from './components/faq/faq.component';
import { DonationsComponent } from './components/donations/donations.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    SpeakersComponent,
    ScheduleComponent,
    OrganizationsComponent,
    FaqComponent,
    DonationsComponent,
    FooterComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
