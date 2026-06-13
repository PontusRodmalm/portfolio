import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Skill {
  tag: string;
  name: string;
  description: string;  
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent { 

  readonly skills: Skill[] = [
    { 
      tag: '[ BACKEND ]', 
      name: 'C# / ASP.NET Core', 
      description: 'REST APIs & Entity Framework' 
    },
    { 
      tag: '[ FULLSTACK ]', 
      name: 'Blazor', 
      description: 'Component-based UI, Blazor Server & SignalR' 
    },
    { 
      tag: '[ FRONTEND ]', 
      name: 'React & Angular', 
      description: 'SPA architecture, JavaScript/TS' 
    },
    { 
      tag: '[ DATABASE ]', 
      name: 'SQL Server', 
      description: 'Relational databases, EF Core' 
    },
    { 
      tag: '[ CLOUD ]', 
      name: 'Microsoft Azure', 
      description: 'Hosting, App Services' 
    },
    { 
      tag: '[ DEVOPS ]', 
      name: 'CI/CD & Git', 
      description: 'Azure DevOps, GitHub Actions' 
    }
  ];
}