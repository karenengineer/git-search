import { HeaderModule } from '../workspace/ui-fragments/header/header.module';
import { RepositoriesComponent } from './repositories/repositories.component';
import { LoaderModule } from '../workspace/ui-kits/loader/loader.module';
import { RepositoryComponent } from './repository/repository.component';
import { ImageModule } from '../workspace/ui-kits/image/image.module';
import { InputModule } from '../workspace/ui-kits/input/input.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RepositoryService } from '../services/repository.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderService } from '../services/header.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        DashboardComponent,
        RepositoryComponent,
        RepositoriesComponent
    ],
    imports: [
        FormsModule,
        ImageModule,
        CommonModule,
        HeaderModule,
        LoaderModule,
        InputModule,
        ReactiveFormsModule,
        DashboardRoutingModule
    ],
    providers: [
        HeaderService,
        RepositoryService
    ]
})
export class DashboardModule {
}
