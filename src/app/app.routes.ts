import { Routes } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    { path: '', component: MainContainerComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'index', component: MainContainerComponent }
];
