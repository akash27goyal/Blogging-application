import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { Router, ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog.model';
import { AlertService } from '../../services/alert.service';


describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
    let router: Router;
    let blogService: BlogService;
    const activatedRouteMock = {
        snapshot: {
            paramMap: convertToParamMap({
                id: '0'
            })
        }
    };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [BlogComponent],
        providers: [
            {
            provide: ActivatedRoute,
            useValue: activatedRouteMock
            },
            BlogService,
            AlertService
        ],
        imports: [
            RouterTestingModule.withRoutes([])
        ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
      component = fixture.componentInstance;
      router = TestBed.get(Router);
      blogService = fixture.debugElement.injector.get(BlogService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should add new blog', () => {
        blogService.blogs = new Array();
        component.blog = { id: null, lastModifiedBy: "abc", lastModifiedAt: new Date(), title: "abc", description: "bcd" }
        component.onSubmit();
        expect(blogService.blogs.length).toEqual(1);
    });

    it('should add new blog with id 1 if no blog exists', () => {
        blogService.blogs = new Array();
        component.blog = { id: null, lastModifiedBy: "abc", lastModifiedAt: new Date(), title: "abc", description: "bcd" }
        component.onSubmit();
        expect(blogService.blogs[0].id).toEqual(1);
    });

    it('should add new blog with unique id  when multiple blogs exists', () => {
        blogService.blogs = [
            { id: 1, lastModifiedBy: "abc", lastModifiedAt: new Date(), title: "abc", description: "bcd" },
            { id: 2, lastModifiedBy: "abc", lastModifiedAt: new Date(), title: "test", description: "test" }
        ]
        component.blog = { id: null, lastModifiedBy: "abc", lastModifiedAt: new Date(), title: "abc", description: "bcd" }
        component.onSubmit();
        expect(blogService.blogs[2].id).toEqual(3);
    });
});
