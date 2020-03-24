import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextBlockComponent } from './components/text-block/text-block.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLinkComponent } from './components/header-link/header-link.component';

@NgModule({
  declarations: [
    AppComponent,
    TextBlockComponent,
    HeaderComponent,
    HeaderLinkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
