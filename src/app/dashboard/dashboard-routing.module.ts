import { RepositoriesComponent } from './repositories/repositories.component';
import { RepositoryComponent } from './repository/repository.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'repositories',
                pathMatch: 'full'
            },
            {
                path: 'repositories',
                component: RepositoriesComponent
            },
            {
                path: 'repository/:id',
                component: RepositoryComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
