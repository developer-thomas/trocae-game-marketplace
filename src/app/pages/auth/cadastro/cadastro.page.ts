import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { alertCircleOutline, mailOutline } from 'ionicons/icons';
import { AuthService } from '../../../core/auth/auth.service';
import { cpfValidator } from '../../../core/validators/cpf.validator';
import { minimumAgeValidator, passwordsMatchValidator } from '../../../core/validators/age.validator';
import { IconComponent } from '../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-cadastro-page',
  standalone: true,
  imports: [ReactiveFormsModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cadastro.page.html',
})
export class CadastroPage {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);

  readonly isSubmitting = signal(false);
  readonly submitError = signal<string | null>(null);
  readonly registered = signal<{ email: string; nextSteps: string } | null>(null);

  readonly mailIcon = mailOutline;
  readonly alertIcon = alertCircleOutline;

  readonly form = this.fb.nonNullable.group(
    {
      fullName: ['', [Validators.required, Validators.maxLength(200)]],
      birthDate: ['', [Validators.required, minimumAgeValidator()]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      cpf: ['', [Validators.required, cpfValidator()]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: passwordsMatchValidator() }
  );

  submit(): void {
    if (this.form.invalid || this.isSubmitting()) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.submitError.set(null);

    const value = this.form.getRawValue();

    this.authService
      .register({
        fullName: value.fullName.trim(),
        birthDate: value.birthDate,
        email: value.email.trim().toLowerCase(),
        phoneNumber: value.phoneNumber.trim(),
        cpf: value.cpf.replace(/\D/g, ''),
        password: value.password,
      })
      .subscribe({
        next: (response) => {
          this.isSubmitting.set(false);
          this.registered.set({ email: response.email, nextSteps: response.nextSteps });
        },
        error: (err: { message?: string }) => {
          this.isSubmitting.set(false);
          this.submitError.set(err.message ?? 'Não foi possível criar a conta.');
        },
      });
  }
}
