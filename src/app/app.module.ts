import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InjiService } from './inji.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ButtonViewComponent } from './button-view/button-view.component';

@NgModule({
  imports:         [ BrowserModule, FormsModule, Ng2SmartTableModule ],
  declarations:    [ AppComponent, HelloComponent, ButtonViewComponent ],
  bootstrap:       [ AppComponent ],
  providers:       [ InjiService ],
  entryComponents: [ HelloComponent, ButtonViewComponent ]
})
export class AppModule { }
