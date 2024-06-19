import { Component } from '@angular/core';
import { TopAotComponent } from './top-aot/top-aot.component';
import { PersonalDescriptionComponent } from './personal-description/personal-description.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [TopAotComponent, PersonalDescriptionComponent, SkillsComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {

}
