import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { DetailsComponent } from './details/details.component';


const appRoutes:Routes = [
    {path:'', redirectTo: 'search', pathMatch: 'full'},
    {path:'search', component:SearchComponent},
    {path:'list', component:ListComponent},
    {path:'favourites', component:FavouritesComponent},
    {path:'details/:id',component:DetailsComponent}
]



@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{

}