import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';


const appRoutes:Routes = [
    {path:'', redirectTo: 'search', pathMatch: 'full'},
    {path:'search', component:SearchComponent},
    {path:'list', component:ListComponent},
    {path:'list/:favourites', component:ListComponent},
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