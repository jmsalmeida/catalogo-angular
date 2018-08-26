import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddRegisterFormComponent } from './add-register-form/add-register-form.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddRegisterFormComponent,
    CatalogListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
