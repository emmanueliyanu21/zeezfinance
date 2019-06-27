import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AgentComponent } from './components/pages/agent/agent.component';
import { ClientsComponent } from './components/pages/clients/clients.component';

const routes: Routes = [
  
  {   path: '', 
      component: HomeComponent 
  },
  {   path: 'agent', 
      component: AgentComponent 
  },
  {   path: 'contact', 
      component: ContactComponent 
  },
  {   path: 'about', 
      component: AboutComponent 
  },
  {   path: 'clients', 
      component: ClientsComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
