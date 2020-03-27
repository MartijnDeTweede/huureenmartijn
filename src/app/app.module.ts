import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextBlockComponent } from './components/text-block/text-block.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLinkComponent } from './components/header-link/header-link.component';

import { RouterModule, Routes } from '@angular/router';
import { ModelsPageComponent } from './pages/models-page/models-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FlexBoxRowComponent } from './layout/flex-box-row/flex-box-row.component';
import { SmallWhiteLogoComponent } from './layout/small-white-logo/small-white-logo.component';
import { PersonalInfoCubeComponent } from './components/cubes/personal-info-cube/personal-info-cube.component';
import { FlexBoxColumnComponent } from './layout/flex-box-column/flex-box-column.component';
import { TitleComponent } from './components/title/title.component';
import { ArticleComponent } from './components/article/article.component';
import { ButtonComponent } from './components/button/button.component';
import { BaseCubeComponent } from './components/cubes/base-cube/base-cube.component';
import { ListItemComponent } from './components/list-item/list-item.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'models', component: ModelsPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TextBlockComponent,
    HeaderComponent,
    HeaderLinkComponent,
    HomePageComponent,
    FlexBoxRowComponent,
    SmallWhiteLogoComponent,
    PersonalInfoCubeComponent,
    FlexBoxColumnComponent,
    TitleComponent,
    ArticleComponent,
    ButtonComponent,
    BaseCubeComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
