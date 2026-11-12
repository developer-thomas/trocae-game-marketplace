import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const MINIMUM_AGE = 18;

/** Espelha Trocae.Domain.Identity.AgeRule — a conta precisa ter 18 anos completos. */
export function minimumAgeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string | null;
    if (!value) {
      return null;
    }

    const birthDate = new Date(value);
    if (Number.isNaN(birthDate.getTime())) {
      return { dataInvalida: true };
    }

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const birthdayAlreadyHappenedThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!birthdayAlreadyHappenedThisYear) {
      age--;
    }

    return age >= MINIMUM_AGE ? null : { menorDeIdade: true };
  };
}

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (!password || !confirmPassword) {
      return null;
    }

    return password === confirmPassword ? null : { senhasDiferentes: true };
  };
}
