import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ContactService } from '../../services/contact.service';
import is from '@angular/common/locales/extra/is';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  private readonly snackBar = inject(MatSnackBar);

  isSubmitting = false;

  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required, Validators.minLength(2)],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required, Validators.minLength(10)],
  });

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    this.contactService.sendMessage(this.contactForm.getRawValue()).subscribe({
      next: () => {
        this.snackBar.open('Message sent successfully!', 'Close', { duration: 5000 });
        this.contactForm.reset();
        this.isSubmitting = false;
      },
      error: () => {
        this.snackBar.open('Network failure. Try again.', 'Close', { duration: 5000 });
        this.isSubmitting = false;
      },
    });
  }
}
