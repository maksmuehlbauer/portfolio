import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopAotComponent } from './top-aot/top-aot.component';
import { PersonalDescriptionComponent } from './personal-description/personal-description.component';
import { SkillsComponent } from './skills/skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ContactComponent } from './contact/contact.component';
import { TranslateModule } from '@ngx-translate/core';
import { CustomTranslateService } from './../translate.service';


@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [
    TopAotComponent, 
    PersonalDescriptionComponent, 
    SkillsComponent, 
    MyProjectsComponent, 
    ContactComponent,
    TranslateModule,
    CommonModule,
    ],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {

  constructor(private customTranslateService: CustomTranslateService) {}

  switchLanguage(language: string) {
    this.customTranslateService.switchLanguage(language);
  }

}
