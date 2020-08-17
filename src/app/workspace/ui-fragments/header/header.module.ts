import { NavigationBarModule } from '../navigation-bar/navigation-bar.module';
import { ImageModule } from '../../ui-kits/image/image.module';
import { InputModule } from '../../ui-kits/input/input.module';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        InputModule,
        ImageModule,
        CommonModule,
        NavigationBarModule,
    ],
    exports: [
        HeaderComponent
    ],
    providers: []
})
export class HeaderModule {
}
