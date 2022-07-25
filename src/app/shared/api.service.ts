import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  // create restro using post method.
  postRestaurent(data:any) {
    return this._http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any) => {
      return res;
    }))
  }

  // get restaurent data using get method.
  getRestaurent() {
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any) => {
      return res;
    }))
  }

  // update restaurent using Put method.
  updateRestaurent(data:any, id:number) {
    return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any) => {
      return res;
    }))
  }

  // delete restaurent using Delete Methods.
  deleteRestaurent(id:number) {
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any) => {
      return res;
    }))
  }
}
