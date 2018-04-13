import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { ListModule } from './components/list/list.module';
import { DetailsModule } from './components/details/details.module';
import { SearchModule } from './components/search/search.module';
import { AppRoutingModule } from './appRouting.module';
import { ApiService } from './services/api.service';
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
    AppRoutingModule,
    JsonpModule
  ],
  providers: [ApiService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
