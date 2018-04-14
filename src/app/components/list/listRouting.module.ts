import { ListComponent } from "./list.component";
import { NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

const LIST_ROUTER = [
    {
        path: '',
        component:ListComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(LIST_ROUTER)],
    exports: [RouterModule]
})

export class ListRoutingModule { }