import { Routes } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MainContainerComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacypolicy', component: PrivacyPolicyComponent },
    { path: 'index', component: MainContainerComponent }
];
