import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBlogComponent } from './view-blog.component';
import { BlogService } from '../../services/blog.service';
import { DatePipe } from '@angular/common';
import { Blog } from '../../models/blog.model';

describe('ViewBlogComponent', () => {
  let component: ViewBlogComponent;
    let fixture: ComponentFixture<ViewBlogComponent>;
    let blogService: BlogService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [ViewBlogComponent],
        providers: [
            BlogService,
            DatePipe
        ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBlogComponent);
      component = fixture.componentInstance;
      blogService = fixture.debugElement.injector.get(BlogService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should delete blogs', () => {
        blogService.blogs = [
            { id: 1, lastModifiedBy: "abc", lastModifiedAt: new Date(), title: "abc", description: "bcd" },
            { id: 2, lastModifiedBy: "abc", lastModifiedAt: new Date(), title: "test", description: "test" }

        ]
        component.onDelete(1);
        expect(blogService.blogs.length).toEqual(1);
    })

    it('should not delete blogs if id is not in the list', () => {
        blogService.blogs = [
            { id: 1, lastModifiedBy: "abc", lastModifiedAt: new Date(), title: "abc", description: "bcd" },
            { id: 2, lastModifiedBy: "abc", lastModifiedAt: new Date(), title: "test", description: "test" }

        ]
        component.onDelete(3);
        expect(blogService.blogs.length).toEqual(2);
    })

    it('should sort blogs in ascending order', () => {
        component.blogs = [
            { id: 1, lastModifiedBy: "abc", lastModifiedAt: new Date("February 21, 2021 11:20:25"), title: "abc", description: "bcd" },
            { id: 2, lastModifiedBy: "abc", lastModifiedAt: new Date("February 22, 2021 11:20:30"), title: "test", description: "test" },
            { id: 3, lastModifiedBy: "abc", lastModifiedAt: new Date("February 23, 2021 11:20:35"), title: "test3", description: "test3" }

        ]
        component.selectedValue = 1;
        component.getFilteredBlogs();
        expect(component.blogs[2].id).toEqual(3);
    })

    it('should sort blogs in descending order', () => {
        component.blogs = [
            { id: 1, lastModifiedBy: "abc", lastModifiedAt: new Date("February 21, 2021 11:20:25"), title: "abc", description: "bcd" },
            { id: 2, lastModifiedBy: "abc", lastModifiedAt: new Date("February 22, 2021 11:20:30"), title: "test", description: "test" },
            { id: 3, lastModifiedBy: "abc", lastModifiedAt: new Date("February 23, 2021 11:20:35"), title: "test3", description: "test3" }
        ]
        component.selectedValue = 2;
        component.getFilteredBlogs();
        expect(component.blogs[2].id).toEqual(1);
    })
});
