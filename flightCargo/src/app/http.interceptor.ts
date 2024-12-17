import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { API_BASE_URL } from '../constants';
import { catchError } from 'rxjs';
import { inject } from '@angular/core';
import { ErrorService } from './error/error.service';
import { Router } from '@angular/router';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  
  if (req.url.startsWith("/api/"))
  {
    req = req.clone({
      url:req.url.replace("/api/", API_BASE_URL),
      withCredentials: true,
    });  
  }
  const errorService = inject(ErrorService);
  const router = inject(Router);
  return next(req).pipe(
    catchError((err) => {
      if (err.status === 401) {
        router.navigate(['/login']);
      } else {
        errorService.insertError(err.message);
        router.navigate(['/error']);
      }

      return [err];
    })
  );
};
