import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Validação local de CPF (formato + dígitos verificadores), espelhando a
 * regra de Trocae.Domain.Identity.Cpf no backend. É só feedback de
 * experiência — o backend revalida tudo antes de qualquer chamada externa.
 */
export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string | null;
    if (!value) {
      return null; // deixa o Validators.required cuidar do caso vazio
    }

    const digits = value.replace(/\D/g, '');

    if (digits.length !== 11) {
      return { cpfInvalido: true };
    }

    if (new Set(digits.split('')).size === 1) {
      return { cpfInvalido: true };
    }

    if (!hasValidCheckDigits(digits)) {
      return { cpfInvalido: true };
    }

    return null;
  };
}

function hasValidCheckDigits(digits: string): boolean {
  const nums = digits.split('').map(Number);

  const firstCheckDigit = calculateCheckDigit(nums, 9);
  if (firstCheckDigit !== nums[9]) {
    return false;
  }

  const secondCheckDigit = calculateCheckDigit(nums, 10);
  return secondCheckDigit === nums[10];
}

function calculateCheckDigit(digits: number[], count: number): number {
  let weight = count + 1;
  let sum = 0;

  for (let i = 0; i < count; i++) {
    sum += digits[i] * weight;
    weight--;
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}
