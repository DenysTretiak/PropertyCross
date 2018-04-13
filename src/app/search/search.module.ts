import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule,  FormControl, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [SearchComponent],
  providers: [],
  exports:[SearchComponent]
})
export class SearchModule { }
