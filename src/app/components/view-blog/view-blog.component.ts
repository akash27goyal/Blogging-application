import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog.model';
import { BlogService } from '../../services/blog.service';
import { DatePipe } from '@angular/common'

@Component({
    selector: 'app-view-blog',
    templateUrl: './view-blog.component.html',
    styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {
    selectedValue: number;
    sortOptions: any[] = [
        { id: 1, name: 'Ascending' },
        { id: 2, name: 'Descending' }
    ]
    blogs: Blog[];
    constructor(private blogService: BlogService, public datepipe: DatePipe) { }

    ngOnInit(): void {
        this.selectedValue = 1;
        this.blogs = this.blogService.getBlogs();
        this.sortByAscending();
    }

    /*
     * This function is used to delete the blog
     */
    onDelete(id: number) {
        this.blogService.deleteBlog(id);
    }

    /*
     * this function is used to sort the blogs by date
     */
    getFilteredBlogs() {
        if (this.selectedValue == 2) {
            this.sortByDescending();
        }
        else {
            this.sortByAscending();
        }
    }

    private sortByAscending() {
        this.blogs.sort((val1, val2) => {
            return <any>new Date(val1.lastModifiedAt) - <any>new Date(val2.lastModifiedAt);
        });
    }

    private sortByDescending() {
        this.blogs.sort((val1, val2) => {
            return <any>new Date(val2.lastModifiedAt) - <any>new Date(val1.lastModifiedAt);
        });
    }
}
