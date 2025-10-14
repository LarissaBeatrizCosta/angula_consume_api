import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../services/companies';
import { CompanyModel } from '../../models/company';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './companies.html',
  styleUrl: './companies.scss',
})
export class CompaniesView implements OnInit {
  companies: CompanyModel[] = [];
  loading = true;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe({
      next: (data) => {
        this.companies = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar empresas:', err);
        this.loading = false;
      },
    });
  }
}
