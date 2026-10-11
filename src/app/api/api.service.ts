import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = "https://jsonplaceholder.typicode.com/users";
  //constructor(private httpClient: HttpClient) { }
  private httpClient = inject (HttpClient)

  getData(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.apiUrl);
  }

}
