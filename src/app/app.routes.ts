import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent, pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent},
];
