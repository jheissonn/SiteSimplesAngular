import { Routes } from '@angular/router';


export const ROUTES: Routes =[
    
    {path:'', pathMatch: 'full', redirectTo: 'Principal'},
    {
        path:'Principal', 
        loadChildren: () => import('./pagina-inicial/pagina-inicial.module').then(m => m.PaginaInicialModule)
    },
    { path: '**', redirectTo: 'Principal', pathMatch: 'full' }

]