import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyModel } from '../models/company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private apiUrl = 'http://localhost:3000/companies';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<CompanyModel[]> {
    return this.http.get<CompanyModel[]>(this.apiUrl);
  }

}
