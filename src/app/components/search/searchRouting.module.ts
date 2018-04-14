import { SearchComponent } from "./search.component";
import { NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

const SEARCH_ROUTER = [
    {
        path: '',
        component:SearchComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(SEARCH_ROUTER)],
    exports: [RouterModule]
})

export class SearchRoutingModule { }