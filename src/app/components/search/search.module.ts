import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule,  FormControl, FormsModule } from '@angular/forms';
import { SearchRoutingModule } from './searchRouting.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SearchRoutingModule
  ],
  declarations: [SearchComponent],
  exports:[SearchComponent]
})
export class SearchModule { }
