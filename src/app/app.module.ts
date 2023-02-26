import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {PostCodeComponentComponent} from './components/post-code-component/post-code-component.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PostService} from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app.routes';
import {AutoCompleteModule} from 'primeng/primeng';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
@NgModule({
  declarations: [
    AppComponent,
    PostCodeComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule, AppRoutingModule, AutoCompleteModule, DataTableModule, GrowlModule

  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
