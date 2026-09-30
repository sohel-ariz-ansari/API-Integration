import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    this.apiService.getData().subscribe({
      next: (response: any[]) => {
        this.users = response;
      },
      error: (err: any) => {
        console.error('Error while fetching data', err);
      },
    });
  }
}
