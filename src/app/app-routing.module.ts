import { ArtistComponent } from './pages/artist/artist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListCardComponent } from './components/list-card/list-card.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path:':find',
        component:ListCardComponent,
      },
      {
        path:'',
        component:ListCardComponent,
      },
      {
        path: 'artista/:id',
        component: ArtistComponent
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
