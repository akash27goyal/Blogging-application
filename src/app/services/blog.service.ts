import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';


@Injectable()
/*
 * this service act as a central store which stores the blogs 
 */
export class BlogService {
    blogs: Blog[] = new Array();
    constructor() { }
    /*
     *this is used to get the list of all blogs. 
     */
    getBlogs() {
        return this.blogs;
    }

    /*
     *this is used to get a particular blog 
     */
    getBlogById(id: number) {
        return this.blogs.find(x => x.id === id);
    }

    /*
     * this is used to add a blog
     */ 
    addBlog(blog: Blog) {
        if (blog && blog.id) {
            this.blogs.push(blog);
        }
    }

    /*
     * this is used to update a blog
     */ 
    updateBlog(blog: Blog) {
        let oldBlog = this.blogs.find(x => x.id === blog.id);
        oldBlog.description = blog.description;
        oldBlog.title = blog.title;
    }

    /*
     * this is used to delete a blog  
     */
    deleteBlog(id: number) {
        let blog = this.blogs.find(x => x.id === id);
        if (blog) {
            let index = this.blogs.indexOf(blog, 0);
            this.blogs.splice(index, 1);
        }
    }

    /*
     * this is used to get next unique id to identify a blog 
     */ 
    getMaxId() {
        if (this.blogs.length == 0) {
            return 1;
        }
        else {
            return this.blogs.reduce(
                (max, blog) => (blog.id > max ? blog.id : max),
                this.blogs[0].id) + 1;
        }

    }
}