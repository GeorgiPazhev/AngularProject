import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { API_BASE_URL } from '../constants';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  
  if (req.url.startsWith("/api/"))
  {
    req = req.clone({
      url:req.url.replace("/api/", API_BASE_URL),
      withCredentials: true,
    });  
  }

  return next(req);
};
