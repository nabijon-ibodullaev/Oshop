import { Component, OnInit } from '@angular/core';
import { AdminUsersService } from '../Services/admin-users.service';
import {
  faTrash,
  faPencil,
  faTimesCircle,
  faExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  Users: any[] = [];
  isAdmin: boolean = false;
  faTrash = faTrash;
  faPencil = faPencil;
  faTimesCircle = faTimesCircle;
  faExclamation = faExclamation;
  page = 1;
  pageSize = 10;
  constructor(
    private AdminUsersService: AdminUsersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.AdminUsersService.getAllUsers().subscribe((data) => {
      this.Users = data;
    });
  }
  deleteUser(user: number) {
    this.AdminUsersService.deleteuUser(user).subscribe((data) => {
      this.Users.splice(data, 1);
    });
  }

  getAllProducts() {
    this.router.navigate(['/admin/products']);
  }
}
