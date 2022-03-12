import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { PaginaErrorComponent } from './component/pagina-error/pagina-error.component';


const routes: Routes = [
  {path: '', component: HeaderComponent, pathMatch: 'full'},
  {path:'**', component: PaginaErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
