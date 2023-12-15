import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './pages/services/services.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'servicios',
    component: ServicesComponent
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
/*   {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  },

  //RENDERIZA LA PAGE NOTFOUND.... SIEMPRE VA DE ULTIMO PORQUE INTERFIERE!....
  {
    path: '**',
    component: NotFoundComponent
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
