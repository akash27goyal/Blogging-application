import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog.model';
import { getLocaleDateTimeFormat } from '@angular/common';
import { Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    /*
     * this function to remove the value from session storage which is used for authenticate user.
     */ 
    logout() {
        sessionStorage.removeItem("isValidUser");
    }
}
