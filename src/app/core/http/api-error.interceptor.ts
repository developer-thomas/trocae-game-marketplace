import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ApiProblemDetails } from '../models/auth.models';

/**
 * Normaliza erros da API (formato ProblemDetails) para que os componentes
 * não precisem conhecer a forma exata da resposta HTTP.
 */
export const apiErrorInterceptor: HttpInterceptorFn = (req, next) =>
  next(req).pipe(
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse) {
        const problem = error.error as ApiProblemDetails | null;
        const message =
          problem?.detail ??
          problem?.title ??
          (error.status === 0
            ? 'Não foi possível conectar à API. Verifique sua conexão.'
            : 'Ocorreu um erro inesperado. Tente novamente.');

        return throwError(() => ({ status: error.status, message, raw: problem }));
      }

      return throwError(() => error);
    })
  );
