import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';


import {MatInputModule} from '@angular/material/input';

import {MatBadgeModule} from '@angular/material/badge';

// import { MatProgressSpinnerModule, MatSpinner} from '@angular/material/progress-spinner';

const material = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatChipsModule,
  MatBadgeModule,
  // MatProgressSpinnerModule,
  // MatSpinner,
  // CUSTOM_ELEMENTS_SCHEMA
  MatInputModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...material
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports:[...material]
})
export class AngularMaterialModule { }
