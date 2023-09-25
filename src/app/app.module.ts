import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CatComponent } from './components/animations/cat/cat.component';
import { TitleComponent } from './components/animations/title/title.component';
import { SubtitleComponent } from './components/animations/subtitle/subtitle.component';
import { ScrollDownArrowComponent } from './components/animations/scroll-down-arrow/scroll-down-arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CatComponent,
    TitleComponent,
    SubtitleComponent,
    ScrollDownArrowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
