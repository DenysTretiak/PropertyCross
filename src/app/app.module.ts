import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { ListModule } from './list/list.module';
import { DetailsModule } from './details/details.module';
import { SearchModule } from './search/search.module';
import { FavouritesModule } from './favourites/favourites.module';
import { AppRoutingModule } from './appRouting.module';
import { ApiService } from './services/api.service';
import { HttpModule } from '@angular/http';
import { JsonpModule, Jsonp, Response } from '@angular/http';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    ListModule,
    DetailsModule,
    SearchModule,
    FavouritesModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule
  ],
  providers: [ApiService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
