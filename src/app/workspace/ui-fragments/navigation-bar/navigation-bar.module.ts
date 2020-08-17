import { NavigationBarComponent } from './navigation-bar.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        NavigationBarComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavigationBarComponent
    ]
})
export class NavigationBarModule {
}
