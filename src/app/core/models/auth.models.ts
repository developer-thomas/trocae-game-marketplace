export interface RegisterRequest {
  fullName: string;
  birthDate: string; // yyyy-MM-dd
  email: string;
  phoneNumber: string;
  cpf: string;
  password: string;
}

export interface RegisterResponse {
  id: string;
  email: string;
  nextSteps: string;
}

/** Formato RFC 9457 (ProblemDetails) devolvido pela API em erros. */
export interface ApiProblemDetails {
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
  errors?: Record<string, string[]>;
}
