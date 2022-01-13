import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';
import { ApiService } from 'src/app/services/api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule,
  ],
  providers: [
    ApiService,
  ],
  declarations: [IndexPage]
})
export class IndexPageModule {}
