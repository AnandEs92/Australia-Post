import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostCodeComponentComponent} from './components/post-code-component/post-code-component.component';

const routes: Routes = [ {
    path: '', component: PostCodeComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
