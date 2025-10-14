import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CompaniesService, Company } from '../../services/companies';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './empresas.html',
  styleUrl: './empresas.scss',
})
export class Empresas implements OnInit {
  companies: Company[] = [];
  carregando: boolean = true; 

  constructor(private companiesService: CompaniesService) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies() {
    this.carregando = true;
    this.companiesService.getCompanies().subscribe({
      next: (data) => {
        this.companies = data;
        this.carregando = false;
      },
      error: (err) => {
        console.error('Erro ao buscar empresas:', err);
        this.carregando = false;
      },
    });
  }
}
