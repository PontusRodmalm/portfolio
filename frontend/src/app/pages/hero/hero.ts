import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'app-hero',
 standalone: true,
 imports: [CommonModule],
 templateUrl: './hero.component.html',
 styleUrl: './hero.component.scss'
})
export class HeroComponent {
readonly stack = [
    '"C# & .NET Core"',
    '"Blazor"',
    '"React & Angular"',
    '"EF Core & SQL Server"'
  ];
}
