import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRepoComponent } from './list-repo.component';

describe('ListRepoComponent', () => {
  let component: ListRepoComponent;
  let fixture: ComponentFixture<ListRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRepoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
