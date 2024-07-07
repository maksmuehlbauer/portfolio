// /// <reference types="@angular/localize" />
// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { provideHttpClient } from '@angular/common/http';
// import { provideTranslations } from './app/provide-translation';
// import { CustomTranslateService } from './app/translate.service';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient(),
//     provideTranslations,
//     CustomTranslateService
//   ]
// })
// .catch(err => console.error(err));



////////////////*css*/`

/// <reference types="@angular/localize" />
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslations } from './app/provide-translation';
import { CustomTranslateService } from './app/translate.service';

// Erweitere die Anbieter in appConfig
const extendedAppConfig = {
  appConfig,
  providers: [
    appConfig.providers,
    provideHttpClient(),
    provideTranslations,
    CustomTranslateService
  ]
};

bootstrapApplication(AppComponent, extendedAppConfig)
  .catch(err => console.error(err));







// MY Main.ts works !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// /// <reference types="@angular/localize" />
// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));