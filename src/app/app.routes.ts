import { ContactComponent } from './contact/contact.component';
import { StartComponent } from './start/start.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
    {path:'',component:StartComponent ,title:'start framwork' },
    {path:'about', component:AboutComponent ,title:'about'},
    {path:'portfolio', component:PortfolioComponent , title:'portfolio'},
    {path:'contact', component:ContactComponent , title:'contact'}
];
