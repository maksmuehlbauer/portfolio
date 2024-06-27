import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  skillList = [
    { icon: 'ang.png', name: 'Angular' },
    { icon: 'typescript.png', name: 'TypeScript' },
    { icon: 'js.png', name: 'JavaScript' },
    { icon: 'html.png', name: 'HTML' },
    { icon: 'fire.png', name: 'Firebase' },
    { icon: 'git.png', name: 'GIT' },
    { icon: 'css.png', name: 'CSS' },
    { icon: 'auto.png', name: 'Material Design' },
    { icon: 'api.png', name: 'Rest-Api' },     
    { icon: 'scrum.png', name: 'Scrum' }
    // { icon: 'wordpress.png', name: 'WordPress' }
  ];

  projectList = [
    {
      id: 0,
      img: './assets/img/my-projects/join.png',
      title: 'Join',
      languages: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      projecturl: 'https://max-muehlbauer.developerakademie.net/projects/join_group/index.html',
      githuburl: 'https://github.com/maksmuehlbauer/Join_Gruppenarbeit'
    },
    { 
      id: 1,
      img: './assets/img/my-projects/elpolloloco.png',
      title: 'Pollo Loco',
      languages: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      projecturl: 'https://max-muehlbauer.developerakademie.net/projects/polloloco/index.html#',
      githuburl: 'https://github.com/maksmuehlbauer/el-pollo-loco'
    },
    {
      id: 2,
      img: './assets/img/my-projects/crm.png',
      title: 'Simple CRM',
      languages: 'Angular | Firebase',
      description: 'A very Simple Customer Relationship Management system working with CRUD functionality.',
      projecturl: 'https://www.google.de',
      githuburl: 'https://www.bild.de'
    },
    {
      id: 3,
      img: './assets/img/my-projects/pokedex.png',
      title: 'Pokédex',
      languages: 'JavaScript | HTML | CSS | Api ',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      projecturl: 'https://max-muehlbauer.developerakademie.net/projects/pokedex/index.html',
      githuburl: 'https://www.bild.de'
    },
    {
      id: 4,
      img: './assets/img/my-projects/crypto.png',
      title: 'Crypto Converter',
      languages: 'Angular | TypeScript | RestAPI | HTML | CSS',
      description: 'Simple currency converter based on a public API displaying exchange rate charts.',
      projecturl: 'https://www.google.de',
      githuburl: 'https://www.bild.de'
    }
  ]
}
