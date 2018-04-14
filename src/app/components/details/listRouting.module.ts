import { DetailsComponent } from "./details.component";
import { NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

const DETAILS_ROUTER = [
    {
        path: '',
        component:DetailsComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(DETAILS_ROUTER)],
    exports: [RouterModule]
})

export class DetailsRoutingModule { }