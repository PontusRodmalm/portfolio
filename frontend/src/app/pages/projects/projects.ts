import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  tag: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  featured: boolean;
  codePreview?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      tag: 'Featured — Full Stack (testing)',
      title: 'Test123',
      description: 'test',
      technologies: ['.NET 10', 'Angular 21', 'EF Core', 'SQL Server'],
      githubUrl: 'test',
      featured: true,
      codePreview: 'GET /api/tasks\n200 { data: [...] }',
    },
  ];
}
