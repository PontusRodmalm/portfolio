import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'app-navbar',
 standalone: true,
 imports: [CommonModule],
 templateUrl: './navbar.html',
 styleUrl: './navbar.scss'
})
export class Navbar {
 menuOpen = false;
 toggleMenu(): void {
this.menuOpen = !this.menuOpen;
 }
 closeMenu(): void {
this.menuOpen = false;
 }
}