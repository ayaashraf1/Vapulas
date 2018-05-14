import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { FormAddComponent } from './form-add/form-add.component';
import { ContactComponent } from './contact/contact.component';
import { AlphabeticFilterComponent } from './alphabetic-filter/alphabetic-filter.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import {RouterModule} from '@angular/router';
import { ContactServicService } from 'src/app/service/contact-servic.service';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AddContactComponent,
    FormAddComponent,
    ContactComponent,
    AlphabeticFilterComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'add',component:FormAddComponent },
      {path:'',component:ContactPageComponent}
     
    ])
  ],
  providers: [ContactServicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
