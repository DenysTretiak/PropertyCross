import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [
    {path:'', redirectTo: 'search', pathMatch: 'full'},
    {
      path:'search', 
      loadChildren:'app/components/search/search.module#SearchModule'
    },
    {
      path:'list', 
      loadChildren:'app/components/list/list.module#ListModule'
    },
    {
        path:'list/:favourites',
        loadChildren:'app/components/list/list.module#ListModule'
    },
    {
        path:'details/:id',
        loadChildren:'app/components/details/details.module#DetailsModule'
    }
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