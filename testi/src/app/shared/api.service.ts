import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  postResturant(data: any): Observable<any> {
    return this._http.post<any>('http://localhost:3003/resturant',data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getRestaurant() {
    return this._http.get<any>('http://localhost:3003/resturant').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  updateRestaurant(data: any, id: number) {
    return this._http
      .put<any>(`http://localhost:3003/resturant/${id}`,data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  deleteRestaurant(id: number) {
    console.log(id);
    return this._http
      .delete<any>(`http://localhost:3003/resturant/${id}`).pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
