import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Company {
  id: string;
  name: string;
  cnpj: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private apiUrl = 'http://localhost:3000/companies'; 

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }

}
