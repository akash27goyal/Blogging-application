import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../../models/blog.model';
import { BlogService } from '../../services/blog.service';
import { NgForm } from '@angular/forms';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
    id: number;
    header: string;
    blog: Blog;
    lastModifiedBy: string;
    constructor(private router: Router, private route: ActivatedRoute, private blogService: BlogService, private alertService: AlertService) {
        this.lastModifiedBy = sessionStorage.getItem("userName");
    }

    ngOnInit(): void {
        this.id = +this.route.snapshot.paramMap.get('id');
        if (this.id === 0) {
            this.header = 'Add Blog';
            this.blog = new Blog();
        }
        else {
            this.header = 'Edit Blog';
            this.blog = this.blogService.getBlogById(this.id);
        }
    }
     /*
      *This function is used to add/update blog 
      */
    onSubmit() {
        if (this.blog && this.blog.title && this.blog.title.trim() && this.blog.description && this.blog.description.trim()) {
            this.blog.lastModifiedAt = new Date();
            this.blog.lastModifiedBy = this.lastModifiedBy;
            if (this.id == 0) {
                this.blog.id = this.blogService.getMaxId();
                this.blogService.addBlog(this.blog);
            }
            else {
                this.blogService.updateBlog(this.blog)
            }
            this.router.navigate(['/home']);
        } else {
            this.alertService.showAlert("Please fill mandatory fields");
        }
    }

}
